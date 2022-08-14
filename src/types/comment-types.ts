import { AuthorFromServer, AuthorProps } from "./author-types"

export type CommentProps = {
	id: Number,
	body: string,
	postId: Number,
	// author: AuthorProps,
}

export type CommentFromServer = {
	id: string,
	body: string,
	postId: Number,
	// author: AuthorFromServer,
}