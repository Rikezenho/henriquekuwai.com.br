import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { PostData, loadBlogPosts } from "../loader";
import { PostCard } from "../components/PostCard";
import { personalData, cvData } from "../data";
import Image from "next/image";
import logo from "../../public/logo.png";

export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  const { personalData, cvData } = await import("../data");

  await generateRSS(posts);

  const props = {
    posts,
    personalData,
    cvData,
  };

  return { props };
};

const Home = (props: {
  posts: PostData[];
  personalData: object;
  cvData: object;
}) => {
  const { developingSince, frontendSince } = personalData;
  const {
    employee: { name, url },
  } = cvData;

  return (
    <>
      <div className="content">
        <Head>
          <title>Henrique Kuwai</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="title">
          <Image src={logo} /> <span className="text">Henrique Kuwai</span>
        </h1>
        <h2 className="subtitle">
          JavaScript lover. Developer since {developingSince}.<br />
          Focusing in front-end since {frontendSince}.
          {name ? (
            <>
              <br />
              Currently employed at{" "}
              <a href={url} className="highlight">
                {name}
              </a>
              .
            </>
          ) : (
            <>
              <br />
              Currently <span className="highlight">available for jobs</span>.
            </>
          )}
        </h2>

        {props.posts.length ? (
          <div className="section">
            <h2>Blog posts</h2>
            <div className="post-card-container">
              {props.posts.map((post, j) => {
                return <PostCard post={post} key={j} />;
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
