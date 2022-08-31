import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  width: 270px;
  height: 200px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  button {
    color: #fff;
    background: #235a96;
    border: 1px solid #3077c6;
    border-radius: 10px;
    padding: 10px 20px;
    :hover {
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
  }
`;
