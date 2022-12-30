package pre019.server.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotEmpty;

@Getter
public class AnswerPostDto {

    @NotEmpty
    private String content;
}
