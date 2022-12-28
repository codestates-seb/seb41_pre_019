package pre019.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private String title;
    private String content;
    private String username;
    private int vote;
    private LocalDateTime createdAt;

//  private List<Tag> questionTags;
}
