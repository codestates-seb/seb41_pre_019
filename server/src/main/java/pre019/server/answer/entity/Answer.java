package pre019.server.answer.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre019.server.audit.Auditable;
import pre019.server.question.entity.Question;
import pre019.server.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    // USER, QUESTION 테이블 연관관계 매핑
    @ManyToOne
    @JoinColumn(name="USER_ID")
    @JsonBackReference
    private User user;

    @ManyToOne
    @JoinColumn(name="QUESTION_ID")
    @JsonBackReference
    private Question question;

    @Column(nullable = false)
    private String content;

    private int vote = 0;
}