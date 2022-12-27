package pre019.server.user.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class UserPostDto {
    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    private String name;
}
