import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  max-width: 90%;
  .card-controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .control-bar {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
export const BtnSave = styled.button`
  text-transform: uppercase;
  padding: 10px 40px;
  margin: 10px auto;
  background-color: #115a64;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5;
    cursor: pointer;
  }
  &[disabled] {
    background: gray;
    cursor: not-allowed;
  }
`;
