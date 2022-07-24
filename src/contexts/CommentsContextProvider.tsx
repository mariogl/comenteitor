import { IComment } from "../types/interfaces";
import CommentsContext from "./CommentsContext";

interface CommentsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const comments: IComment[] = [
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

const CommentsContextProvider = ({
  children,
}: CommentsContextProviderProps): JSX.Element => {
  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsContextProvider;
