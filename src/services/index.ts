import { urlEndpoint } from "@/constants";
import cookiesHandler from "@/utils/storage/cookies";
import { message } from "antd";
import axios from "axios";
const serviceInstanceNoAuth = axios.create({
	baseURL: urlEndpoint,
	timeout: 10000,
});

const serviceInstance = (
	language: "id-ID" | "en-US" | "en-UK",
	isNotify: boolean
) => {
	const accessToken = cookiesHandler.getCookie("access_token");
	const _serviceInstance = axios.create({
		baseURL: urlEndpoint,
		timeout: 10000,
		headers: {
			"Accept-Language": language,
			Authorization: "Bearer " + accessToken,
		},
	});

	_serviceInstance.interceptors.response.use(
		function (response): any {
			if (isNotify) message.success({ content: response.data.message });
			return response;
		},
		function (error) {
			if (isNotify) message.error({ content: error.response.data.message });
			return error;
		}
	);

	return _serviceInstance;
};

export { serviceInstanceNoAuth, serviceInstance };
export { Auth } from "./auth";