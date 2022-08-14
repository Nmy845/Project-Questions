
import { QuestionListProps } from "./type"
import { List } from "antd";
import { AppRoute } from "../../const";

export default function QuestionList({questions
}: QuestionListProps): JSX.Element {

	return (
		<div className="list-wrapper">
			<List
			itemLayout="horizontal"
			dataSource={questions}
			renderItem={question => (
				<List.Item>
					<List.Item.Meta
					title={<a href={`${AppRoute.Question.replace(':id',`${question.id}`)}`}>{question.title}</a>}
					description={question.date}
					/>
					<div>
						<a href={`${AppRoute.Author.replace(':id',`${question.author.id}`)}`}>{question.author.name}</a>
						</div>
				</List.Item>
			)}
			></List>
		</div>
	)
}