import styled from 'styled-components';

export const Container = styled.div`
  .icons {
    margin: 0 15px;
    font-size: 50px;
    cursor: pointer;
    outline: 0;
  }
  .icons:hover {
    transform: scale(1.3);
    transition: all 0.5s;
  }
  margin: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 78, 89, 1),
    rgba(0, 78, 89, 0.7)
  );
  color: white;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  span {
    display: block;
    font-size: 40px;
    font-weight: bold;
  }
  margin-left: 10px;
  color: white;
  text-transform: uppercase;
`;
