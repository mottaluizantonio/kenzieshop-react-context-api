import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #fff;
  padding: 2% 3%;
  > h2 {
    border-radius: 4px;
    :hover {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  > div {
    display: flex;
    justify-content: space-between;
    > h3 {
      border-radius: 4px;
      :hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    > h3:last-of-type {
      margin-left: 30px;
    }
    > {
      span {
        position: relative;
        left: -5px;
        background: #235a96;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 20px;
      }
    }
  }
`;
