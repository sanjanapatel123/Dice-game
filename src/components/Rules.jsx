import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>click on dice image</p>
        <p>if you get the number you selected, you win</p>
        <p>if you do not get the number you selected, you lose</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fbf1f1;
  padding: 20px;

  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
