import { State } from "../../types/state";
import { QuestionProps } from "../../types/question-types";

export const getQuestionList = ({questions}: State): QuestionProps[] => questions.questionList;
export const getIsDataLoaded = ({questions}: State): boolean => questions.isDataLoaded;
