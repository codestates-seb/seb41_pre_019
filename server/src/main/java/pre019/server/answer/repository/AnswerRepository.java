package pre019.server.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pre019.server.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    // 질문에 해당하는 답변 페이지네이션
    @Query("select m from Answer m where m.question.questionId = :id")
    Page<Answer> findByQuestionId(@Param("id") long id, Pageable pageable);
}
