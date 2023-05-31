import { message } from "antd";
import { serviceInstance } from "..";
import _ from "lodash"

interface IRegister {
	data: {
		fullName: string;
		username: string;
		password: string;
	};
	isNotify: boolean;
}

async function register(user: IRegister) {
	const { data } = await serviceInstance("id-ID", user.isNotify).post(
		"/api/v1/auth/register",
		user.data,
		{
			headers: {
				"Accept-Language": "id-ID",
			},
		}
	);
	return data;
}
export { register };
