import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sendQuestionAction } from "../../store/api-actions";
import { ThunkAppDispatch } from "../../types/action";
import { QuestionModalProps, QuestionPost } from "./type";
import { useSelector } from "react-redux";
import { getQuestionList } from "../../store/question-list/selectors";
import { getAuthors } from "../../store/authors/selectors";

const DEFAULT_TAG = '';
const MIN_POST_LENGTH = 1;
const MAX_POST_LENGTH = 100;



export default function Modal({modalIsActive, deactivateModal}: QuestionModalProps): JSX.Element {
	const [titleInput, setTitleInput] = useState('');
	const [tagInput, setTagInput] = useState ('');
	const [questionInput, setQuestionInput] = useState('');

	const authors = useSelector(getAuthors);
	const author = authors[Math.floor(Math.random()*authors.length)];

	const questions = useSelector(getQuestionList);
	const currentId = questions[questions.length-1]?.id + 1 ?? 0;
	
	const [isFormSending, setIsFormSending] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false);
	 
	const dispatch = useDispatch<ThunkAppDispatch>();

	const sendQuestion = (data: QuestionPost) => dispatch(sendQuestionAction(data));

	useEffect (() => {
		const isTitleAreaValid = titleInput.length >= MIN_POST_LENGTH && titleInput.length <= MAX_POST_LENGTH;
		const isTagValid = tagInput !== DEFAULT_TAG;
		const isQuestionValid = questionInput.length >= MIN_POST_LENGTH && questionInput.length <= MAX_POST_LENGTH;
		setIsFormValid(isTitleAreaValid && isTagValid && isQuestionValid);
	}, [ titleInput, tagInput, questionInput]);

	const handleTagChange = useCallback(
		(evt: ChangeEvent<HTMLInputElement>) => setTagInput(evt.currentTarget.value),
		[],
	)

	const handleSubmit = (evt: FormEvent) => {
		evt.preventDefault();

		const postData = {
			id: currentId,
			author: author,
			title: titleInput,
			date: new Date().toLocaleDateString(),
			question: questionInput,
			solved: "0",
			rating: "0",
			tag: tagInput,
			comments: [],
		};
		
	setIsFormSending(true);
	sendQuestion(postData)
	 .then(()=> setIsFormSending(false));
	}

	return (
		<div className={`modal ${modalIsActive === true ?'is-active' : ''} modal--question`}>
		  <div className="modal__wrapper">
			 <div className="modal__overlay" data-close-modal></div>
			 <div className="modal__content">
				<h2 className="modal__header modal__header--review title title--medium">Задать вопрос!</h2>
				<form className="form-question" onSubmit={handleSubmit}>
				  <div className="form-question__wrapper">
					 <div className="form-question__name-wrapper">
						<label className="form-question__label form-question__label--required" htmlFor="user-name">Название темы</label>
						<input className="form-question__input form-question__input--name" id="user-name" type="text" autoComplete="off" value={titleInput} onChange={(evt: { currentTarget: {value: any; };}) => setTitleInput(evt.currentTarget.value)}></input>
					 </div>
					 <div className="form-question__radio-wrapper">
						 <div>
							<input type="radio" name="tag" value="life" id="Жизнь" onChange={handleTagChange}></input>
							<label htmlFor="Жизнь">Жизнь</label>
						 </div>
						 <div>
							<input type="radio" name="tag" value="games" id="Игры" onChange={handleTagChange}></input>
							<label htmlFor="Игры">Игры</label>
						 </div>
						 <div>
							<input type="radio" name="tag" value="education" id="Образование" onChange={handleTagChange}></input>
							<label htmlFor="Образование">Образование</label>
						 </div>
					 </div>
				  </div>
				  <div className="form-question__question-wrapper">
				  <label className="form-question__label form-question__label--required" htmlFor="comment" >Вопрос</label>
				  <textarea className="form-question__input form-question__input--textarea" id="comment" value={questionInput} onChange={(evt: { currentTarget: {value: any; };}) => setQuestionInput(evt.currentTarget.value)}></textarea>
				  <button className="button button--medium-20 form-question__button" type="submit" disabled={isFormSending || !isFormValid}>Задать вопрос</button>
				</div>
				</form>
				<button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon" ></span><span className="modal__close-btn-interactive-area" onClick={() => deactivateModal()}></span>
				</button>
			 </div>
		  </div>
		</div>
	);
}