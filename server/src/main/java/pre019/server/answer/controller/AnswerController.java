package pre019.server.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pre019.server.answer.dto.AnswerPatchDto;
import pre019.server.answer.dto.AnswerPostDto;
import pre019.server.answer.entity.Answer;
import pre019.server.answer.mapper.AnswerMapper;
import pre019.server.answer.service.AnswerService;
import pre019.server.question.entity.Question;
import pre019.server.user.entity.User;

@RestController
@RequestMapping("/questions/{question-id}/answer")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping("/submit/{user-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") long questionId,
                                     @PathVariable("user-id") long userId,
                                     @RequestBody AnswerPostDto answerPostDto) {

        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);
        answer.setUser(new User(userId));
        answer.setQuestion(new Question(questionId));
        answerService.createAnswer(answer);

        return new ResponseEntity(mapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("question-id") long questionId,
                                      @RequestBody AnswerPatchDto answerPatchDto) {
        // TODO 답변 수정
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("question-id") long questionId) {
        // TODO 답변 삭제
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
