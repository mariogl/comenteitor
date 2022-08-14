import React, { SyntheticEvent, useState } from "react";
import useApi from "../../hooks/useApi";
import { IProtoComment } from "../../types/interfaces";

const FormComment = (): JSX.Element => {
  const { createComment } = useApi();

  const initialNewComment: IProtoComment = {
    commentUrl: "",
  };

  const [newComment, setNewComment] =
    useState<IProtoComment>(initialNewComment);

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    createComment(newComment);

    setNewComment(initialNewComment);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={submitForm} className="mb-5">
      <div className="form-group">
        <label htmlFor="url">Comment URL: </label>
        <input
          type="url"
          id="url"
          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 mb-3"
          value={newComment.commentUrl}
          onChange={(event: SyntheticEvent<HTMLInputElement>) =>
            setNewComment({
              ...newComment,
              commentUrl: (event.target as HTMLInputElement).value,
            })
          }
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={newComment.commentUrl === ""}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default FormComment;
