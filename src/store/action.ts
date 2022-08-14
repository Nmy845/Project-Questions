import { QuestionFromServer } from "../types/question-types";
import { ActionType } from "../types/action";
import { createAction } from "@reduxjs/toolkit";
import { AuthorFromServer, AuthorProps } from "../types/author-types";

export const loadQuestions = createAction(
	ActionType.LoadQuestions,
	(questions: QuestionFromServer[]) => ({payload: questions})
);

export const loadQuestion = createAction(
	ActionType.LoadQuestion,
	(question: QuestionFromServer) => ({payload: question})
);

export const loadAuthor = createAction(
	ActionType.LoadAuthors,
	(author: AuthorFromServer) => ({payload: author})
)

export const loadAuthors = createAction (
	ActionType.LoadAuthors,
	(authors: AuthorProps[]) => ({payload: authors})
);
