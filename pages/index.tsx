import type { NextPage } from "next";
import { useQuery } from "react-query";
import TweetCard from "../components/TweetCard";
import PageContainer from "../containers/Page";
import Tweet from "../model/tweet";

const fetchTweets = async () => {
  const response = await fetch("http://localhost:3000/api/tweet");
  return await response.json();
};

const Home: NextPage = () => {
  const { isLoading, data } = useQuery<Tweet[]>("tweets", fetchTweets);

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
