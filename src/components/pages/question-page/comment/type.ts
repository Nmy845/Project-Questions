import { AuthorProps } from "../../../../types/author-types";

export type CommentPost = {
	 id: string,
    body: string,
    postId: number,
    author: AuthorProps,
}