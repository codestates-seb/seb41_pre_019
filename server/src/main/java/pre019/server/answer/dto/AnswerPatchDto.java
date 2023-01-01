package pre019.server.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class AnswerPatchDto {

    private long questionId;

    private long answerId;

    @NotEmpty
    private String content;

    private int vote;
}
