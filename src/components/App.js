import Header from "./Header";
import Main from "./Main";
import { QuizProvider } from "./contexts/QuizContext";

export default function App() {
  return (
    <div className="app">
      <QuizProvider>
        <Header />
        <Main />
      </QuizProvider>
    </div>
  );
}
