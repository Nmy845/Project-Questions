import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
	LoadQuestions = 'data/loadQuestions',
	LoadQuestion = 'data/loadQuestion',
	LoadAuthors = 'data/loadAuthors',
	LoadAuthor = 'data/loadAuthor',
	FilterQuestions = 'data/filterQuestions'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;