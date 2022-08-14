import { AuthorFromServer, AuthorProps } from "./types/author-types";
import { CommentFromServer, CommentProps } from "./types/comment-types";
import { QuestionFromServer, QuestionProps } from "./types/question-types";

export const adaptToClient = (question: QuestionFromServer): QuestionProps => (
	{
		id: Number(question['id']),
		title: question['title'],
		author: question['author']?(adaptAuthorToClient(question['author'])): {} as AuthorProps,
		rating: question['rating'],
		date: question['date'],
		tag: question['tag'],
		solved: question['solved'],
		question: question['question'],
		comments: question['comments']?.map(comment => adaptCommentToClient(comment)) ?? [],
	}
)

export const adaptCommentToClient = (comment: CommentFromServer): CommentProps => (
	{
		id: Number(comment['id']),
		// author: adaptAuthorToClient(comment['author']),
		body: comment['body'],
		postId: comment['postId'],
	}
)

export const adaptAuthorToClient = (author: AuthorFromServer): AuthorProps => (
	{
		id: Number(author['id']),
		name: author['name'],
		username: author['name'],
		email: author['email'],
		phone: author['phone'],
		website: author['website']
	}
) 

export const adaptQuestionsToClient = (questions: QuestionFromServer[]): QuestionProps[] => {
	return (questions.map((question) => adaptToClient(question)))
};

export const adaptQuestionToClient = (question: QuestionFromServer): QuestionProps => {
	return adaptToClient(question)
};

export const adaptCommentsToClient = (comments: CommentFromServer[]): CommentProps[] => {
	return (comments.map((comment) => adaptCommentToClient(comment)));
}
