import type { NextPage } from "next";
import TweetCard from "../components/TweetCard";
import PageContainer from "../containers/Page";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["tweet.all"]);

  if (isLoading) {
    return (
      <PageContainer className="flex items-center justify-center">
        <p> loading... </p>
      </PageContainer>
    );
  }

  if (!data) {
    return (
      <PageContainer className="flex items-center justify-center">
        <p> No Tweets </p>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="flex flex-col space-y-3">
      {data.map((tweet) => (
        <TweetCard key={tweet.id} {...tweet} />
      ))}
    </PageContainer>
  );
};

export default Home;
