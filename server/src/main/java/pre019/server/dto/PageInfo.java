package pre019.server.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PageInfo {

    private int number;
    private int size;
    private long totalElements;
    private int totalPages;
}
