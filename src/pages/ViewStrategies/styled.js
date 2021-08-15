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
    flex-direction: column;
    align-items: center;
  }
  .control-bar {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
export const StrategyArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;
