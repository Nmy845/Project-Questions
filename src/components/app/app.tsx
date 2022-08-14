import Main from "../pages/main-page/main";
import { AppRoute } from "../../const";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import QuestionPage from "../pages/question-page/question-page";
import AuthorPage from "../pages/author-page/author";
import NotFound from "../pages/not-found/not-found";

function App(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route exact path={AppRoute.Main}>
				<Main/>
				</Route>
				<Route exact path={AppRoute.Question}>
				<QuestionPage/>
				</Route>
				<Route exact path={AppRoute.Author}>
				<AuthorPage/>
				</Route>
				<Route>
					<NotFound/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;