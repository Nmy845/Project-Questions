import { ThunkActionResult } from "../types/action";
import { loadQuestions, loadQuestion, loadAuthors} from "./action";
import { AuthorFromServer } from "../types/author-types";
import { APIRoute } from "../const";
import { QuestionFromServer, QuestionProps } from "../types/question-types";
import { QuestionPost } from "../components/modal/type";
import { loadAuthor } from "./action";


export const fetchQuestionsAction = (): ThunkActionResult =>
		async (dispatch, _getState, api): Promise<void> => {
		const{data} = await api.get<QuestionFromServer[]>(APIRoute.Questions);
		dispatch(loadQuestions(data));
	};

export const fetchQuestionAction = (questionId: number): ThunkActionResult =>
	async (dispatch, _getstate, api): Promise<void> => {
	const {data} = await api.get<QuestionFromServer>(APIRoute.Question.replace(':id',`${questionId}`));
	dispatch(loadQuestion(data));
}

export const sendQuestionAction = (question: QuestionPost): ThunkActionResult => 
		async ( dispatch, _getState, api): Promise<void> => {
		await api.post<QuestionProps>(APIRoute.Questions, question);
		dispatch(fetchQuestionsAction());
	}

export const updateQuestionAction = (question: QuestionPost): ThunkActionResult => 
		async ( dispatch, _getState, api): Promise<void> => {
		await api.put<QuestionProps>(APIRoute.Question.replace(':id', `${question.id}`), question);
		dispatch(fetchQuestionsAction());
	}

export const deleteQuestionAction = (id: number): ThunkActionResult => 
		async ( dispatch, _getState, api): Promise<void> => {
		await api.delete(APIRoute.Question.replace(':id', `${id}`), );
		dispatch(fetchQuestionsAction());
	}

export const fetchAuthorsAction = (): ThunkActionResult =>
		async (dispatch, _getState, api): Promise<void> => {
		const{data} = await api.get<AuthorFromServer[]>(APIRoute.Users);
		dispatch(loadAuthors(data));
	}

export const fetchCurrentAuthor = (authorId: number): ThunkActionResult =>
	async (dispatch, _getState, api): Promise<void> => {
		console.log(authorId);
		const {data} = await api.get<AuthorFromServer>(APIRoute.User.replace(':id',`${authorId}`));
		dispatch(loadAuthor(data));
	}