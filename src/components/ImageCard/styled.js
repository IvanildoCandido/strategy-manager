import styled from 'styled-components';

export const Container = styled.div`
  &:hover {
    transform: scale(1.1);
    transition: all 0.7s;
  }
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #767778;
  width: ${(props) => props.size.width + 'px'};
  height: ${(props) => props.size.height + 'px'};
  box-shadow: 2px 2px 5px #d9d9d9;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 50px;
  margin: 10px;
`;
export const Tumbnail = styled.img`
  width: ${(props) => props.size.width + 'px'};
  height: ${(props) => props.size.height + 'px'};
`;
