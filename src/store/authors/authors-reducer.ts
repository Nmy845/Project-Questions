import { loadAuthors } from "../action";
import { createReducer } from "@reduxjs/toolkit";
import { AuthorsState } from "../../types/state";

const initialState: AuthorsState = {
	authors: [],
	isDataLoaded: false,
}

export const authorsStateReducer = createReducer(initialState, (builder) => {
	builder
	.addCase(loadAuthors, (state, action) => {
		state.authors = action.payload;
		state.isDataLoaded = true;
		});
});