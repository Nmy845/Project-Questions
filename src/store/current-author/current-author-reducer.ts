import { CurrentAuthorState } from "../../types/state";
import { AuthorProps } from "../../types/author-types";
import { loadAuthor } from "../action";
import { adaptAuthorToClient } from "../../utils";
import { createReducer } from "@reduxjs/toolkit";

const initialState: CurrentAuthorState = {
	author: {} as AuthorProps,
	isAuthorLoaded: false,
};

export const currentAuthorReducer = createReducer(initialState, (builder) => {
	builder
	.addCase(loadAuthor, (state, action) => {
		state.author = adaptAuthorToClient(action.payload);
		state.isAuthorLoaded = true;
	});
});