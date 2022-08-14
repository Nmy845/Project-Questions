import type { State } from "../../types/state";
import type { AuthorProps } from "../../types/author-types";

export const getCurrentAuthor = ({author}: State): AuthorProps => author.author;
export const getIsAuthorLoaded = ({author}: State): boolean => author.isAuthorLoaded;