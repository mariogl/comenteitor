import { createContext } from "react";
import { ICommentsContext } from "../types/interfaces";

const CommentsContext = createContext<ICommentsContext | null>(null);

export default CommentsContext;
