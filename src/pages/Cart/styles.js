import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 660px;
`;

export const ProductBox = styled.div`
  width: 90%;
  background: #235a96;
  height: 200px;
  border-radius: 10px;
  padding: 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  img {
    height: 160px;
  }
  > strong {
    font-size: 20px;
  }
  > div {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    width: 285px;
    height: 335px;
    padding-top: 20px;
    padding-bottom: 0px;
    > strong {
      margin-top: 10px;
    }
    > div {
      justify-content: space-evenly;
    }
  }
`;
