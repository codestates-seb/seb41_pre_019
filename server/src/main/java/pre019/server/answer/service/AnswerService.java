package pre019.server.answer.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import pre019.server.answer.entity.Answer;
import pre019.server.answer.repository.AnswerRepository;
import pre019.server.exception.BusinessLogicException;
import pre019.server.exception.ExceptionCode;
import pre019.server.question.entity.Question;
import pre019.server.question.service.QuestionService;
import pre019.server.user.service.UserService;

import java.util.Optional;

@Service
public class AnswerService {

    private AnswerRepository answerRepository;
    private QuestionService questionService;
    private UserService userService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, UserService userService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.userService = userService;
    }

    public Answer createAnswer(Answer answer) {
        answer.setQuestion(questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId()));
        answer.setUser(userService.findUser(answer.getUser().getUserId()));
        return answerRepository.save(answer);
    }

    public Page<Answer> findAnswers(long questionId, int page, int size) {
        // questionId에 해당하는 답변 리스트를 조회
        return answerRepository.findByQuestionId(questionId, PageRequest.of(page,size));
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> answer.setContent(content));
        Optional.ofNullable(answer.getVote())
                .ifPresent(vote -> answer.setVote(vote));

        return answerRepository.save(answer);
    }

    public void deleteAnswer(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);
    }

    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
