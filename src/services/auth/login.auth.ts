import { serviceInstance } from "..";

interface ILogin {
	data: {
		username: string;
		password: string;
	};
	isNotify: boolean
}

async function login(user: ILogin) {
	const { data } = await serviceInstance("id-ID", user.isNotify).post(
		"/api/v1/auth/login",
		user.data,
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { login };
