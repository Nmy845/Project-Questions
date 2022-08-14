import { AuthorProps } from "../../types/author-types";
import { State } from "../../types/state";

export const getAuthors = ({authors}: State): AuthorProps[] => authors.authors;
export const getIsDataLoaded = ({authors}: State): boolean => authors.isDataLoaded;
