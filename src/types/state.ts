import { RootState } from "../store/root-reducer";
import { QuestionProps } from "./question-types";
import { CommentProps } from "./comment-types";
import { AuthorProps } from "./author-types";

export type QuestionListState = {
	questionList: QuestionProps[],
	filteredQuestions: QuestionProps[],
	currentTag: string,
	isDataLoaded: boolean,
}

export type CurrentQuestionState = {
	currentQuestion: QuestionProps,
	comments: CommentProps[],
	isCommentsLoaded: boolean;
}

export type AuthorsState = {
	authors: AuthorProps[],
	isDataLoaded: boolean,
}

export type CurrentAuthorState = {
	author: AuthorProps,
	isAuthorLoaded: boolean,
}
export type State = RootState;

