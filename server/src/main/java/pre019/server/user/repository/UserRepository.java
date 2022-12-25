package pre019.server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pre019.server.user.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
