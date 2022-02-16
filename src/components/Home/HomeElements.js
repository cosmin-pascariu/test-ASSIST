import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  margin-left: 230px;
  width: calc(100% - 230px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const HomeContent = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HomeCard = styled.div`
  width: 30%;
  height: 300px;
  margin: 10px;
  background-color: #000;
  border: 1px solid #000;
`;

export const CardTitle = styled.div`
  height: 10%;
  width: 100%;
  font-size: 14px;
  background-color: #fff;
`;

export const CardImage = styled.div`
  height: 70%;
  width: 100%;
  background-color: #000;
`;

export const CardDescription = styled.div`
  height: 20%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const FirstLine = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    color: black;
  }
`;

export const SecondLine = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;

  button {
    border-radius: 5px;
    margin: 0 5px;
    background-color: #ededed;
  }
`;
