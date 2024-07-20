import Startgame from "./components/Startgame";
import { useState } from "react";
import Gameplay from "./components/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <Gameplay></Gameplay>
      ) : (
        <Startgame toggle={toggleGamePlay}></Startgame>
      )}
    </>
  );
}

export default App;
