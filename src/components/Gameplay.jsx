import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button } from "../styled/Button";
import outlineButton from "../styled/Button";
import Rules from "./Rules";

function Gameplay() {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [rules, setrules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setscore(0);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      seterror("you have not selected any number");
      return;
    }
    seterror("");
    const random = generateRandomNumber(1, 7);
    setCurrentDice((prev) => random);

    if (selectedNumber === random) {
      setscore((prev) => prev + random);
    } else {
      setscore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <Rolldice currentDice={currentDice} roleDice={roleDice}></Rolldice>
      <div className="btn">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={() => setrules((prev) => !prev)}>
          {rules ? "Hide" : "Show"} Rules
        </Button>
        {rules && <Rules></Rules>}
      </div>
    </MainContainer>
  );
}

export default Gameplay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btn {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
