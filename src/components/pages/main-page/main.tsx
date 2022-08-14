import { getQuestionList } from "../../../store/question-list/selectors";
import Header from "../../header/header";
import QuestionList from "../../question-list/question-list";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalPost from "../../modal/modal";
import { Select } from "antd";

const { Option } = Select;
export default function Main(): JSX.Element {
	const questions = useSelector(getQuestionList);
	const [modalIsActive, setModalIsActive] = useState(false);
	const activateModal = () => setModalIsActive(true);
	const deactivateModal = () => setModalIsActive(false);


	return (
		<div>
		<div className="wrapper">
<Header
activateModal={activateModal}
/>
		<main className="page-content">
			<div className="container">
				<div className="sort__wrapper">
					<div className="sort__time">
					<Select placeholder="Сортировать по дате">
						<Option value="new">Сначала новые</Option>
						<Option value="old">Сначала старые</Option>
					</Select>
					</div>
					<div className="sort__tag">
						<Select placeholder="Выбор по теме">
						<Option value="life">Жизнь</Option>
						<Option value="games">Игры</Option>
						<Option value="education">Образование</Option>
					</Select>
					</div>
				</div>
<QuestionList questions={questions}
 />
			</div>
		</main>
	</div>
	<div >
    <ModalPost
	 modalIsActive={modalIsActive}
	 deactivateModal={deactivateModal}
	 />
	 </div>
	 </div>
	);
}

