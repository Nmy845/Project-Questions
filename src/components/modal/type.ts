import { AuthorProps } from "../../types/author-types"

export type QuestionModalProps = {
	modalIsActive: boolean,
	deactivateModal: any,
}

export type QuestionPost = {
	id: number,
	// author: AuthorProps,
	title: string,
	date: string,
	question: string,
	solved: string,
	rating: string,
	tag: string,
}