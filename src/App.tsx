import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Comment {
  id: number;
  url: string;
  displayUrl: string;
  date: Date;
}

const comments: Comment[] = [
  {
    id: 1,
    url: "https://github.com/darqsa/202207-w3chwe-david-arques",
    displayUrl: "",
    date: new Date("2022-07-23"),
  },
  {
    id: 2,
    url: "https://github.com/darqsa/202207-w3chwe-david-arques/pull/10/commits/187377d5926d476241824a75bbc8a26c6514ab95",
    displayUrl: "",
    date: new Date("2022-07-23"),
  },
  {
    id: 3,
    url: "https://github.com/darqsa/202207-w3chwe-david-arques",
    displayUrl: "",
    date: new Date("2022-07-23"),
  },
];

const App = (): JSX.Element => {
  const commentsProcessed: Comment[] = comments.map((comment) => {
    const url = new URL(comment.url);
    return {
      ...comment,
      displayUrl: url.pathname.split("/")[2],
    };
  });
  return (
    <>
      <header className="main-header">
        <div className="container mx-auto px-4 h-12 border flex items-center">
          <h1 className="font-medium text-3xl">Comenteitor</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="container mx-auto p-4 border">
          <p className="font-medium text-xl mb-4">
            {commentsProcessed.length} pending comments
          </p>
          <ul className="comment-list">
            {commentsProcessed.map(({ displayUrl }) => (
              <li className="comment-data h-8 flex items-center justify-between">
                <a href={displayUrl}>{displayUrl}</a>
                <FontAwesomeIcon icon={faTimesCircle} className="text-xl" />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default App;
