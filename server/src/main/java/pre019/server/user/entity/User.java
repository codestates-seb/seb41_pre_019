package pre019.server.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pre019.server.answer.entity.Answer;
import pre019.server.audit.Auditable;
import pre019.server.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="USER_TABLE")
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int reputation = 0;

    // 질문, 답변 연관관계 매핑
    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Answer> answers = new ArrayList<>();

}
