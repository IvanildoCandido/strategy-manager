import styled from 'styled-components';
import MANAICON from '../../assets/icons/stat_bg_mana.png';

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
  .icon-type {
    width: 40px;
  }
  .icon-mana {
    width: 50px;
    height: 50px;
    background-image: url(${MANAICON});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      margin-top: 10px;
      width: 50px;
      position: relative;
      text-align: center;
      color: white;
      align-items: center;
    }
  }
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;
export const BtnFilter = styled.button`
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
