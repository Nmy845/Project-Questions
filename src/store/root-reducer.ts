import { combineReducers } from "@reduxjs/toolkit";
import { authorsStateReducer } from "./authors/authors-reducer";
import { currentQuestionReducer } from "./current-question/current-question-reducer";
import { questionListReducer } from "./question-list/question-list-reducer";
import { currentAuthorReducer } from "./current-author/current-author-reducer";

export const rootReducer = combineReducers({
	questions: questionListReducer,
	question: currentQuestionReducer,
	authors: authorsStateReducer,
	author: currentAuthorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
