import { useQuiz } from "./contexts/QuizContext";

import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";

function Main() {
  const { status } = useQuiz();

  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Question />
          <Footer />
        </>
      )}
      {status === "finished" && <FinishScreen />}
    </main>
  );
}

export default Main;
