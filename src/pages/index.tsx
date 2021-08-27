import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { PostData, loadBlogPosts } from "../loader";
import { PostCard } from "../components/PostCard";
import { Introduction } from "../components/Introduction/Introduction";
import { PersonalData } from "../types/data";
import type { GetStaticPropsContext } from "next/types";
import { getLocale } from "../utils/locale";
import { IntroductionData } from "../types/introduction";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const posts = await loadBlogPosts();
  const { introduction, personalData } = await getLocale(context, [
    "data",
    "introduction",
  ]);

  await generateRSS(posts);

  const props = {
    posts,
    personalData,
    introduction,
  };

  return { props };
};

interface IHomeProps {
  posts: PostData[];
  personalData: PersonalData;
  introduction: IntroductionData;
}

const Home: React.FC<IHomeProps> = ({
  posts,
  personalData,
  introduction,
}: IHomeProps) => {
  return (
    <>
      <div className="content">
        <Head>
          <title>Henrique Kuwai</title>
        </Head>

        <Introduction personalData={personalData} introduction={introduction} />

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
