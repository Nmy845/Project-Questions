import { AuthorFromServer, AuthorProps } from "./author-types"
import { CommentFromServer, CommentProps } from "./comment-types"

export type QuestionProps = {
	id: number,
	title: string,
	author: AuthorProps,
	rating: string,
	date: string,
	tag: string,
	solved: string,
	question: string,
	comments: CommentProps[],

}

export type QuestionFromServer = {
	'id': string,
	'title': string,
	'author': AuthorFromServer,
	'rating': string,
	'date': string,
	'tag': string,
	'solved': string,
	'question': string,
	"comments": CommentFromServer[],
}