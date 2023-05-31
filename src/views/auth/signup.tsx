/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Input, message } from "antd";
import cookiesHandler from "@/utils/storage/cookies";
import { Auth } from "@/services";
import { LoadingOutlined } from "@ant-design/icons";

interface ILogin {
	fullName: string;
	username: string;
	password: string;
}

function RegisterViews() {
	const router = useRouter()
	const [isLoading, setLoading] = useState(false);
	const [data, _setData] = useState<ILogin>({
		fullName: "",
		username: "",
		password: "",
	});

	const setData = (label: string, value: any) => {
		_setData({
			...data,
			[label]: value,
		});
	};

	const handleLogin = async () => {
		setLoading(true);
		Auth.register({ data: data, isNotify: true })
			.then((result) => {
				if(!result) return;
				message.success({content: `${result.data.fullName} berhasil didaftarkan!`})
				router.replace("/auth/signin");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center w-full py-4">
			<div className="w-96 pb-16 bg-blue-700 rounded-xl text-white shadow-xl flex flex-col p-4 my-8">
				<h2 className="text-center font-bold text-xl">Daftar</h2>
				<div className="mt-4">
					<div>
						<label htmlFor="fullName">Nama Lengkap</label>
						<Input
							id="fullName"
							name="fullName"
							onChange={(text) => setData("fullName", text.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="username">Username</label>
						<Input
							id="username"
							name="username"
							onChange={(text) => setData("username", text.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Kata Sandi</label>
						<Input.Password
							id="password"
							name="password"
							onChange={(text) => setData("password", text.target.value)}
						/>
					</div>
					<button
						onClick={handleLogin}
						className=" my-2 px-4 py-1 rounded bg-gray-800 text-gray-100 w-full"
					>
						{isLoading ? <LoadingOutlined /> : "Daftar"}
					</button>
					<p className="text-blue-300 mt-8">
						Sudah punya akun?{" "}
						<Link href="/auth/signin">
							<span className="text-white">Masuk</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default RegisterViews;
