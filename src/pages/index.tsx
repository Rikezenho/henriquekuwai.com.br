import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { PostData, loadBlogPosts } from "../loader";
import { PostCard } from "../components/PostCard";
import { Introduction } from "../components/Introduction/Introduction";
import { PersonalData } from "../data";

export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  const { personalData } = await import("../data");

  await generateRSS(posts);

  const props = {
    posts,
    personalData,
  };

  return { props };
};

interface IHomeProps {
  posts: PostData[];
  personalData: PersonalData;
}

const Home: React.FC<IHomeProps> = ({ posts, personalData }: IHomeProps) => {
  return (
    <>
      <div className="content">
        <Head>
          <title>Henrique Kuwai</title>
        </Head>

        <Introduction personalData={personalData} />

        {posts.length ? (
          <div className="section">
            <h2>Blog posts</h2>
            <div className="post-card-container">
              {posts.map((post, j) => {
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
