import styled from "styled-components";

const Award = styled.div`
  display: block;
  padding: 5px 0;
`;

const AwardTag = styled.div`
  display: inline-block;
  background: #f3f3f3;
  font-weight: 700;
  padding: 5px 10px;
  font-size: 0.7rem;
  border-radius: 5px;

  .icon {
    color: #ffcb00;
  }
`;

export { Award, AwardTag };
