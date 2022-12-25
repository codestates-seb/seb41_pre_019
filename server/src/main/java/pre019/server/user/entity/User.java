package pre019.server.user.entity;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    private String location;

    @Column(nullable = false)
    private int reputation = 0;

    // TODO 뱃지, 태그 연관관계 매핑
}
