package pre019.server.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre019.server.dto.MultiResponseDto;
import pre019.server.question.dto.QuestionPatchDto;
import pre019.server.question.dto.QuestionPostDto;
import pre019.server.question.entity.Question;
import pre019.server.question.mapper.QuestionMapper;
import pre019.server.question.service.QuestionService;
import pre019.server.user.entity.User;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    // TODO Question CRUD
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto,
                                       @RequestParam long userId) {
        // TODO 작성자 id를 파라미터 대신 토큰에서 가져오기
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        question.setUser(new User(userId));
        Question createdQuestion = questionService.createQuestion(question);

        return new ResponseEntity(createdQuestion, HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question =
                questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") long questionId,
                                      @RequestParam int page) {
        // TODO 질문 상세 페이지에 대한 답변 페이지네이션
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestParam int page, @RequestParam int size) {
        Page<Question> questionPage = questionService.findQuestions(page-1,size);
        List<Question> questions = questionPage.getContent();
        return new ResponseEntity(new MultiResponseDto<>(
                mapper.questionsToQuestionResponses(questions), questionPage),HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@Positive @PathVariable("question-id") long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
