import { CommentProps } from "../../../../types/comment-types";
import { List } from "antd";

export default function Comment({comments}:{comments: CommentProps[]}): JSX.Element {
	return (
		
		<div className="comments__wrapper">
			<List
			itemLayout="horizontal"
			dataSource={comments}
			renderItem={comment => (
				<List.Item>
					<List.Item.Meta
					title={comment.body}
					description={'Имя автора(не успел)'}/>
				</List.Item>
			)}
			></List>
		</div>
	)
}