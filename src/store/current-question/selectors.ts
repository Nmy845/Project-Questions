import type { QuestionProps } from "../../types/question-types";
import type { State } from "../../types/state";


export const getCurrentQuestion = ({question}: State): QuestionProps => question.currentQuestion;
export const getIsCommentsLoaded = ({question}: State) : boolean => question.isCommentsLoaded;

