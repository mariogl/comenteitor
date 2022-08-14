import { useReducer } from "react";
import CommentsContext from "./CommentsContext";
import commentsReducer from "./reducers/commentsReducer";

interface CommentsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CommentsContextProvider = ({
  children,
}: CommentsContextProviderProps): JSX.Element => {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  return (
    <CommentsContext.Provider value={{ comments, dispatch }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsContextProvider;
