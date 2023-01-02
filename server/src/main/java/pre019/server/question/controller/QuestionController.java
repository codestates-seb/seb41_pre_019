package pre019.server.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre019.server.answer.entity.Answer;
import pre019.server.answer.mapper.AnswerMapper;
import pre019.server.answer.service.AnswerService;
import pre019.server.dto.MultiQuestionResponseDto;
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
    private final QuestionMapper questionMapper;
    private final AnswerService answerService;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper, AnswerService answerService) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
        this.answerService = answerService;
    }

    // TODO Question CRUD
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto,
                                       @RequestParam long userId) {
        // TODO 작성자 id를 파라미터 대신 토큰에서 가져오기
        Question question = questionMapper.questionPostDtoToQuestion(questionPostDto);
        question.setUser(new User(userId)); // NPE 방지. Service에서 userId로 DB 상의 user를 가져오기 위함.
        Question createdQuestion = questionService.createQuestion(question);

        return new ResponseEntity(createdQuestion, HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question =
                questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity(questionMapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") long questionId,
                                      @RequestParam int page) {
        // TODO 질문 상세 페이지에 대한 답변 페이지네이션
        Question question = questionService.findQuestion(questionId);

        // For Pagination
        Page<Answer> answerPage = answerService.findAnswers(questionId,page-1, 10);
        return new ResponseEntity(new MultiQuestionResponseDto(
                questionMapper.questionToQuestionResponseDto(question),answerPage.getContent(),answerPage),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestParam int page) {
        Page<Question> questionPage = questionService.findQuestions(page-1,10);
        List<Question> questions = questionPage.getContent();
        return new ResponseEntity(new MultiResponseDto<>(
                questionMapper.questionsToQuestionResponses(questions), questionPage),HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@Positive @PathVariable("question-id") long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}