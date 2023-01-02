package pre019.server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pre019.server.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
