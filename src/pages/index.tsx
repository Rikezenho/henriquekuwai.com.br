import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { PostData, loadBlogPosts } from "../loader";
import { PostCard } from "../components/PostCard";
import { Introduction } from "../components/Introduction/Introduction";
import { PersonalData } from "../types/data";
import type { GetStaticPropsContext } from "next/types";
import { getLocale, getLocaleToToggle } from "../utils/locale";
import { IntroductionData } from "../types/introduction";
import { Locale } from "../types/locale";

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
    localeToToggle: getLocaleToToggle(context.locale),
  };

  return { props };
};

interface IHomeProps {
  posts: PostData[];
  personalData: PersonalData;
  introduction: IntroductionData;
  localeToToggle: Locale;
}

const Home: React.FC<IHomeProps> = ({
  posts,
  personalData,
  introduction,
  localeToToggle,
}: IHomeProps) => {
  return (
    <>
      <div className="content">
        <Head>
          <title>Henrique Kuwai</title>
        </Head>

        <Introduction
          personalData={personalData}
          introduction={introduction}
          localeToToggle={localeToToggle}
        />

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
