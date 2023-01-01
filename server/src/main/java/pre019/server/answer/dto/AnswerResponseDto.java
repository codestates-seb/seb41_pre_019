package pre019.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private long questionId;
    private long userId;
    private String content;
    private int vote;
    private LocalDateTime createdAt;
}
