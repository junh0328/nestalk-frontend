import styled from 'styled-components';

export const MainWrapper = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 20px;

  & .title {
    margin-top: 20px;
    font-size: 1.4rem;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 90px;
  border-bottom: 2px solid #e5e5e5;
  margin-bottom: 10px;
  cursor: pointer;

  & .top {
    margin-top: 10px;
    color: black;
  }

  & :first-child {
    border-bottom: none;
    height: 60px;
    cursor: auto;
  }

  & :last-child {
    margin-top: 20px;
    border-bottom: none;
    height: 60px;
    font-size: 0.6rem;
    cursor: auto;
  }

  & p {
    color: gray;
  }
`;

export const Input = styled.input`
  width: 250px;
  padding: 5px;
  margin: 20px 0px;
`;
