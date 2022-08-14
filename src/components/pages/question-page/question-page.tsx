import { useSelector } from "react-redux";
import { getCurrentQuestion } from "../../../store/current-question/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { deleteQuestionAction, fetchQuestionAction, updateQuestionAction } from "../../../store/api-actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Header from "../../header/header";
import ModalPost from "../../modal/modal";
import { FormEvent } from "react";
import Comment from "./comment/comment";
import { getAuthors } from "../../../store/authors/selectors";
import { CommentProps } from "../../../types/comment-types";
import { QuestionProps } from "../../../types/question-types";
import { ThunkAppDispatch } from "../../../types/action";
import { Button } from "antd";
import { Input } from "antd";
import { Form } from "antd";
import { AppRoute } from "../../../const";

export default function QuestionPage(): JSX.Element {

	const authors = useSelector(getAuthors);
	const randomAuthor = authors[Math.floor(Math.random()*authors.length)];
	const [modalIsActive, setModalIsActive] = useState(false);
	const activateModal = () => setModalIsActive(true);
	const deactivateModal = () => setModalIsActive(false);

	const [bodyInput, setBodyInput] = useState('');

	const currentQuestion = useSelector(getCurrentQuestion);
	const comments = currentQuestion.comments;

	const dispatch = useDispatch<ThunkAppDispatch>();
	const [commentsPerTry, setCommentsPerTry] = useState(999);
	const showMore = () => setCommentsPerTry(commentsPerTry + 3);

	const [isCommentSending, setIsCommentSending] = useState(true);


	const { id } : {id: string} = useParams();
	const questionId = Number(id);

	const updateQuestion = (data: QuestionProps) => dispatch(updateQuestionAction(data));
	const deleteQuestion = (id: number) => dispatch(deleteQuestionAction(currentQuestion.id));



	useEffect(() => {
		if ((currentQuestion.id) !== questionId){
			dispatch(fetchQuestionAction(questionId));
		}
	})

	const handleSolvedSubmit = (evt: FormEvent) => {
		evt.preventDefault();

		const Solution: QuestionProps = {
			id: currentQuestion.id,
			author: currentQuestion.author,
			title: currentQuestion.title,
			date: currentQuestion.date,
			question: currentQuestion.question,
			solved: "1",
			rating: currentQuestion.rating,
			tag: currentQuestion.tag,
			comments: currentQuestion.comments
		}

		updateQuestion(Solution);
	}
	const handleDeleteSubmit = (evt: FormEvent) => {
		evt.preventDefault();
		deleteQuestion(currentQuestion.id);
	}
	const handleSubmit = () => {

		const newComments = [...currentQuestion.comments];
		
		const newComment:CommentProps = {
			id: currentQuestion.comments.length + 1,
    		body: bodyInput,
    		postId: currentQuestion.id,
    		// author: randomAuthor,
		};

		newComments.push(newComment);

		const postData: QuestionProps = {
			id: currentQuestion.id,
			author: currentQuestion.author,
			title: currentQuestion.title,
			date: currentQuestion.date,
			question: currentQuestion.question,
			solved: currentQuestion.solved,
			rating: currentQuestion.rating,
			tag: currentQuestion.tag,
			comments: newComments,
		};

		setIsCommentSending(true);
		console.log(isCommentSending);
		updateQuestion(postData)
		.then(() => setIsCommentSending(false));
		console.log(isCommentSending);
	}
	return (
		
<div className="wrapper">
<Header
activateModal={activateModal}
/>
	<div className={`question__solved ${currentQuestion.solved === "1" ? 'visually-hidden' : ''}`}>
		<form className="question__solved" onClick={handleSolvedSubmit}>
		<Button type="ghost">Вопрос был решен? Кликни!</Button>
		</form>
	</div>
	<div className={`question__wrapper ${currentQuestion.solved === "1" ? 'solved' : ''}`}>
		<div className="question__content">
			<div className="question__content-question">
					<h2>{currentQuestion.title}</h2>
			<p>{currentQuestion.question}</p>
			</div>
			<div className="question__content-author">
				<a className="comment info__link" href={`${AppRoute.Author.replace(':id',`${currentQuestion.author?.id} ?? ''`)}`}>
					{currentQuestion.author?.name ?? 'Name'}
					</a>
			</div>
		</div>
		<div className="question__content-wrapper">
			<div className="question__rating">
				<form className="question__delete" onClick={handleDeleteSubmit}>
				<Button danger >Удалить</Button>
				</form>
			</div>
			<div className="question__info">
				<span className="question__info-date">{currentQuestion.date}</span>
			</div>
		</div>
	</div>
	<div className="input__wrapper">
		<form onSubmit={handleSubmit}>
			<div className="input__comment-wrapper">
      		<Input style={{ width: 'calc(100% - 90px)' }} defaultValue="" placeholder="Ответьте на вопрос!" value={bodyInput}  onChange={(evt: { currentTarget: { value: any;}; })=> setBodyInput(evt.currentTarget.value)}/>
      		<Button type="primary" htmlType="submit" >Ответить</Button>
			</div>
		</form>
	</div>
		<Comment
			comments={comments?.slice(0,commentsPerTry) ?? []}
		/>
		<ModalPost
	 modalIsActive={modalIsActive}
	 deactivateModal={deactivateModal}
	 />
</div>


	);
}

