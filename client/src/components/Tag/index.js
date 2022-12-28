// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "./style";
import { searchTagAction } from "../../redux";

function Tag({ name }) {
  const dispatch = useDispatch();
  //const navigator = useNavigate();

  const handleSearchTag = () => {
    dispatch(searchTagAction);
    //navigator("/searchtag");
  };

  return <Button onClick={handleSearchTag}>JavaScript</Button>;
}

export default Tag;
