import styled from "styled-components";

const CourseWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: flex-start;

  .logo,
  .info {
    font-size: $font-size;
  }

  .logo {
    width: 15%;
    text-align: center;

    img {
      max-width: 80%;
    }
  }

  .info {
    width: 85%;
    padding-left: 20px;

    .title {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

export { CourseWrapper };
