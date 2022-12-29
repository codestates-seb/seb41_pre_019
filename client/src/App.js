import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SearchModal from "./components/SearchModal";
import AllQuestions from "./pages/AllQuestions";
import AskQuestion from "./pages/AskQuestion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<AllQuestions />} />
        <Route path="/questions/ask" element={<AskQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
