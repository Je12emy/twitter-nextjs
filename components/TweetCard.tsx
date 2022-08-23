import TweetCard from "../model/tweet";

const TweetCard: React.FC<TweetCard> = ({ user, text, likes }) => {
  return (
    <>
      <section className="mx-3 flex flex-col items-start justify-center bg-gray-700 text-gray-100 shadow-md first:mt-3">
        <span className="mr-auto ml-2 text-gray-300"> @{user} </span>
        <article className="mx-2 my-1 flex flex-col items-start text-gray-100">
          <p> {text} </p>
          <span className="flex flex-row items-center justify-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {likes}
          </span>
        </article>
      </section>
    </>
  );
};

export default TweetCard;
