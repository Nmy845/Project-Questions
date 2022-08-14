import { createReducer } from "@reduxjs/toolkit";
import { CurrentQuestionState } from "../../types/state";
import { QuestionProps } from "../../types/question-types";
import { loadQuestion } from "../action";
import { adaptCommentsToClient, adaptQuestionToClient } from "../../utils";

const initialState: CurrentQuestionState = {
	currentQuestion: {} as QuestionProps,
	comments: [],
	isCommentsLoaded: false,
};

export const currentQuestionReducer = createReducer(initialState, (builder) => {
	builder
	.addCase(loadQuestion, (state, action) => {
		state.currentQuestion = adaptQuestionToClient(action.payload);
		state.comments = adaptCommentsToClient(action.payload.comments);
		state.isCommentsLoaded = true;
	});
});