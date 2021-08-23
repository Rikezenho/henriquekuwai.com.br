import styled from "styled-components";

const Job = styled.div`
  padding: 10px 0;
  position: relative;

  .title {
    overflow: hidden;
    font-weight: 700;
    font-size: 18px;

    @media (max-width: 768px) {
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
`;

export { Job };
