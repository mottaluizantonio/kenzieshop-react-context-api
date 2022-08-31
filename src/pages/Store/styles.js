import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 660px;
  margin-top: 20px;
`;

export const ProductBox = styled.div`
  width: 200px;
  background: #235a96;
  height: 400px;
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
  > strong {
    font-size: 20px;
  }
`;
