import { HeaderProps } from "./type";
import { PageHeader } from "antd";
import { Button } from "antd";
import { Modal } from "antd";

export default function Header({activateModal}: HeaderProps): JSX.Element {

	return (
		<div>
		<PageHeader title="Вопросики!" extra={[
			<Button key="1" type="default" onClick={() => activateModal()}> Задай вопрос! </Button>
		]}></PageHeader>
		<Modal></Modal>
		</div>
	)
}