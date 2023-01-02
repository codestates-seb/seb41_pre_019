import Link from "next/link";
import { QuetionsButton } from "./style";

//next link 씀
function AskQuetionsButton() {
  return (
    <Link href={"/AskQuestion"}>
      <QuetionsButton>Ask Question</QuetionsButton>
    </Link>
  );
}

export default AskQuetionsButton;
