package pre019.server.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class QuestionPatchDto {
    private long questionId;

    @NotBlank
    private String title;

    @NotEmpty
    private String content;

    private int vote;
}
