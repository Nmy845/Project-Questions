export enum APIRoute {
	Questions = '/question',
	Question = '/question/:id',
	Comments = '/comments/:id',
	Users = '/user',
	User = '/user/:id',
}

export enum AppRoute {
	Main = '/',
	Question = '/:id',
	Author='/author/:id',
}

export const Tags = {
	All: {
		title: "Все",
		type: "all"
	},
	Games: {
		title: "Игры",
		type: "games",
	},
	Life: {
		title: "Жизнь",
		type: "life",
	},
	Education: {
		title: "Образование",
		type: "education",
	}
}