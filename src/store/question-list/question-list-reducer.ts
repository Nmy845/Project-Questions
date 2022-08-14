import { createReducer } from "@reduxjs/toolkit";
import { QuestionListState } from "../../types/state";
import { loadQuestions } from "../action";
import { adaptQuestionsToClient } from "../../utils";
import { Tags } from "../../const";

const initialState: QuestionListState = {
	questionList: [],
	filteredQuestions: [],
	currentTag: Tags.All.type,
	isDataLoaded: false,
}

export const questionListReducer = createReducer(initialState, (builder) => {
	builder
	.addCase(loadQuestions, (state, action) => {
		state.questionList = adaptQuestionsToClient(action.payload);
		state.isDataLoaded = true;
		})
});