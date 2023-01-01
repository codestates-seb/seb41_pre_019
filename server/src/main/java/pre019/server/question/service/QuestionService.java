package pre019.server.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import pre019.server.answer.repository.AnswerRepository;
import pre019.server.exception.BusinessLogicException;
import pre019.server.exception.ExceptionCode;
import pre019.server.question.entity.Question;
import pre019.server.question.repository.QuestionRepository;
import pre019.server.user.entity.User;
import pre019.server.user.service.UserService;

import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final UserService userService;
    
    public QuestionService(QuestionRepository questionRepository, UserService userService, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
        this.userService = userService;
    }

    public Question createQuestion(Question question) {
        question.setUser(userService.findUser(question.getUser().getUserId()));
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        // TODO 해당 id의 question이 있는지 검증, title, content 변경
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        Optional.ofNullable(question.getVote())
                .ifPresent(vote -> findQuestion.setVote(vote));

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        // TODO 해당 id의 question이 있는지 검증
        Question question = findVerifiedQuestion(questionId);
        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        // TODO 태그 기능 추가 시 태그 필터링 구현
        return questionRepository.findAll(PageRequest.of(page,size));
    }

    public void deleteQuestion(long questionId) {
        // TODO 해당 id의 question이 있는지 검증
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    public Question findVerifiedQuestion(long questionId) {
        // TODO questionId에 해당하는 질문이 있는지 검증
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

}
