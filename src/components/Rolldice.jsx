import styled from "styled-components";

const Rolldice = ({currentDice,roleDice}) => {
 
  

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default Rolldice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
  }
  .dice {
    cursor: pointer;
  }
`;
