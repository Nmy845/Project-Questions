import { Provider, useDispatch } from 'react-redux';
import App from './components/app/app';
import { configureStore } from '@reduxjs/toolkit';
import { fetchQuestionsAction, fetchAuthorsAction } from './store/api-actions';
import { createAPI } from './services/api';
import { rootReducer } from './store/root-reducer';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';

const api = createAPI();

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

 store.dispatch(fetchAuthorsAction());
setTimeout(() => { store.dispatch(fetchQuestionsAction());}, 5);



ReactDOM.render(
    <Provider store={store}>
     		<App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
