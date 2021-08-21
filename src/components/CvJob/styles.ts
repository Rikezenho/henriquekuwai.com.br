import styled from "styled-components";

const Job = styled.div`
  padding: 10px 0;
  position: relative;

  .title {
    overflow: hidden;
    font-weight: 700;
    font-size: 18px;

    .date {
      border: 2px solid #ccc;
      padding: 0 10px;
      border-radius: 5px;
      float: left;
      margin-right: 5px;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .date {
        float: none;
        display: inline-block;
      }
      .text {
        display: block;
        padding-top: 10px;
      }
    }
  }
  .provider {
    color: #999;
    font-weight: 700;
  }

  .award-item {
    display: block;
    padding: 10px 0;

    .icon {
      color: #ffcb00;
    }
  }
`;

export { Job };
