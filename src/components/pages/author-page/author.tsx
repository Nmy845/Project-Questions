import { Descriptions } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCurrentAuthor } from "../../../store/api-actions";
import { useEffect } from "react";
import { ThunkAppDispatch } from "../../../types/action";
import { getCurrentAuthor } from "../../../store/current-author/selectors";


export default function AuthorPage(): JSX.Element {
	const currentAuthor = useSelector(getCurrentAuthor);
	console.log(currentAuthor);

	const dispatch = useDispatch<ThunkAppDispatch>();

	const { id } : {id: string} = useParams();
	const authorId = Number(id);

	useEffect(() => {
		if ((currentAuthor.id) !== authorId){
			dispatch(fetchCurrentAuthor(authorId));
		}
	})

	return(
		<Descriptions title="Информация о пользователе">
				<Descriptions.Item label="Имя">{currentAuthor.name}</Descriptions.Item>
				<Descriptions.Item label="email">{currentAuthor.email}</Descriptions.Item>
				<Descriptions.Item label="Номер">{currentAuthor.phone}</Descriptions.Item>
				<Descriptions.Item label="Сайт">{currentAuthor.website}</Descriptions.Item>
				<Descriptions.Item label="Ник">{currentAuthor.username}</Descriptions.Item>
		</Descriptions>

	)
}
