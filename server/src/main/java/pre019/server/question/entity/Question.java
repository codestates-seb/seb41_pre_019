package pre019.server.question.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre019.server.answer.entity.Answer;
import pre019.server.audit.Auditable;
import pre019.server.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    // USER, ANSWER 테이블 연관관계 매핑
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="USER_ID")
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Answer> answers = new ArrayList<>();

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    private int vote;

    public Question(Long questionId) {
        this.questionId = questionId;
    }
}
