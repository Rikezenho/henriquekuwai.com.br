import styled from "styled-components";

const StyledCvWrapper = styled.div`
  color: #333;
  padding-top: 10px;

  h2 {
    padding-top: 15px;
    margin: 0;
    padding: 0 0 10px 0;
  }

  a {
    color: #333;
    transition: opacity 0.2s ease, transform 0.2s ease;
    display: inline-block;

    &:hover,
    &:focus {
      opacity: 0.8;
      transform: translateY(-2px) scale(1.02);
    }

    &:visited {
      color: #333;
    }
  }

  ul {
    margin-top: 0;
    padding-left: 0;
  }

  .content {
    width: 1190px;
    margin: 0 auto;
  }
  .has-hr {
    border-top: 2px solid #efefef;
    padding: 20px 0;
  }
  .avoid-page-break {
    page-break-inside: avoid;
  }

  .two-columns {
    columns: 2;
  }

  .flex-wrapper {
    display: flex;
    align-items: flex-start;
  }

  .header {
    display: flex;
    align-items: center;
    padding: 10px 0 20px 0;

    .logo {
      padding-right: 15px;
    }
    h1 {
      font-size: 32px;
      line-height: 1.2;
      font-weight: 700;
      margin: 0;
      padding: 0;
    }
    .subtitulo {
      font-size: 18px;
    }
  }

  .conteudo {
    padding-bottom: 20px;

    .bio-wrapper {
      padding: 20px 0;
    }
    .history-wrapper {
      .ul-history {
        list-style-type: none;
      }
    }

    .sobre,
    .bio {
      width: 50%;
      font-size: $font-size;
    }
    .sobre {
      padding-right: 20px;
    }
    .bio {
      padding-left: 20px;
    }

    .ul-complementary-courses {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;

      li.item {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 33.3333333%;
        padding: 10px;

        .subtitle,
        .date {
          display: inline-block;
        }
        .title {
          font-size: $font-size;
        }
        .date {
          &:before {
            content: " - ";
          }
        }
      }
    }

    .ul-nodelists {
      li.item {
        display: inline-block;
        vertical-align: top;
        padding: 5px;
        font-size: 18px;

        .box {
          background: #fff;
          border-radius: 3px;
          border: 1px solid #ccc;
          padding: 5px 8px;
        }
      }
    }
  }

  .additional-info {
    padding-bottom: 10px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    body {
      font-size: 18px;
    }
    .content {
      width: 90%;
    }

    .flex-wrapper {
      display: block;
    }

    .conteudo {
      .sobre,
      .bio {
        display: block;
        width: 100%;
      }
      .bio {
        padding-top: 20px;
        padding-left: 0;
      }

      .ul-complementary-courses {
        display: block;

        li.item {
          display: block;
          width: 100%;
        }
      }
    }
  }
`;

export { StyledCvWrapper as CvWrapper };
