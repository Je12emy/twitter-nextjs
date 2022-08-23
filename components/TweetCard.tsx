import TweetCard from "../model/tweet";
import LikesCounter from "./LikesCounter";

const TweetCard: React.FC<TweetCard> = ({ user, text, likes }) => {
  return (
    <>
      <section className="mx-3 flex flex-col items-start justify-center bg-gray-700 text-gray-100 shadow-md first:mt-3">
        <span className="mr-auto ml-2 text-gray-300"> @{user} </span>
        <article className="mx-2 my-1 flex flex-col items-start text-gray-100">
          <p> {text} </p>
          <LikesCounter likesNumber={likes} />
        </article>
      </section>
    </>
  );
};

export default TweetCard;
