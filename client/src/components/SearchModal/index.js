import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 55%;
  background-color: white;
  top: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 3px;
  border: 0.1px solid grey;
  padding: 10px 20px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 100px;
    margin-bottom: 10px;

    > div > span {
      font-size: 11px;
    }
    > div > span.searchtext {
      font-family: ui-monospace, "Cascadia Mono", "Segoe UI Mono",
        "Liberation Mono", Menlo, Monaco, Consolas, monospace;
      color: black;
      font-size: 13px;
      font-weight: 1px;
    }
    > div > span.subtext {
      color: grey;
    }
    > div > div.buttonbox {
    }
    > div > button {
      color: #3e77a0;
      background-color: #e1ecf4;
      border-radius: 2.5px;
      font-size: 5px;
      border: 0.2px solid #3e77a0;
      margin: 7px 3px;
      padding: 7px 3px;
    }
  }
`;

const SearchModal = () => {
  return (
    <Container>
      <div>
        <div>
          <span className="searchtext">[tag]</span>
          <span className="subtext"> search within a tag</span>
        </div>
        <br></br>
        <div>
          <span className="searchtext">user:1234</span>
          <span className="subtext"> search by author</span>
        </div>
        <br></br>
        <div>
          <span className="searchtext">"words here"</span>
          <span className="subtext"> exact phrase</span>
        </div>
        <br></br>
        <div className="buttonbox">
          <button>Ask a questions</button>
        </div>
      </div>
      <div>
        <div>
          <span className="searchtext">answers:0</span>
          <span className="subtext"> unanswered questions</span>
        </div>
        <br></br>
        <div>
          <span className="searchtext"> score:3</span>
          <span className="subtext"> posts with a 3+ score</span>
        </div>
        <br></br>
        <div>
          <span className="searchtext"> is:question</span>
          <span className="subtext"> isaccepted:yes </span>
        </div>
      </div>
    </Container>
  );
};

export default SearchModal;
