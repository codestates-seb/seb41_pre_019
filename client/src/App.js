import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SearchModal from "./components/SearchModal";
import AllQuestions from "./pages/AllQuestions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<AllQuestions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
