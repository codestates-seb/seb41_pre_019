package pre019.server.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;
import pre019.server.question.dto.QuestionResponseDto;

import java.util.List;

@Getter
public class MultiQuestionResponseDto<T> {
    // 질문, 답변 리스트, 답변 페이징 정보를 담는 DTO
    private QuestionResponseDto questionResponseDto;
    private List<T> answers;
    private PageInfo pageInfo;

    public MultiQuestionResponseDto(QuestionResponseDto questionResponseDto, List<T> answers, Page page) {
        this.questionResponseDto = questionResponseDto;
        this.answers = answers;
        this.pageInfo = new PageInfo(page.getNumber()+1, page.getSize(),
                page.getTotalElements(), page.getTotalPages());
    }
}