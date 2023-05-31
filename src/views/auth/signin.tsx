/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import cookiesHandler from "@/utils/storage/cookies";
import { LoadingOutlined } from "@ant-design/icons";

interface ILogin {
	username: string;
	password: string;
}

function LoginViews() {
	const router = useRouter();
	const [refresher, refresherOrb] = useState(0);
	const [isLoading, setLoading] = useState(false);
	const [data, _setData] = useState<ILogin>({
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
		setTimeout(() => {
			setLoading(false);
			router.push("/dashboard");
		}, 2000);
	};

	useEffect(() => {
		if (cookiesHandler.getCookie("access_token")) router.replace("/dashboard");
	}, [refresher, refresherOrb]);

	return (
		<div className="flex flex-row h-screen w-full">
			<div className="flex flex-2 bg-white flex-col p-8">
				<div className="w-full mb-6">
					<Link href="/">
						<Image
							className="cursor-pointer inline flex-2"
							src="/images/long-logo.png"
							alt="Logo PENS"
							width={80}
							height={1280}
							unoptimized={true}
						/>
					</Link>
				</div>
				<div className="w-8/12">
					<h2 className="font-semibold text-6xl">
						No Stunting: Authorities Platform
					</h2>
					<p className="mt-4 text-xl">
						No Stunting adalah platform komunikasi dan pencatatan kegiatan ibu
						hamil dan bayi untuk mengoptimalkan pencegahan stunting, dan dengan
						adanya aplikasi ini diharapkan dapat menurunkan angka stunting.
					</p>
					<Image
						className="cursor-pointer inline flex-2"
						src="/images/ava1.png"
						alt="Logo PENS"
						width={480}
						height={1280}
						unoptimized={true}
					/>
				</div>
			</div>
			<div className="flex flex-1 bg-blue-800 h-full">
				<div className="relative w-full">
					<div className="h-full w-full bg-transparent flex flex-row items-center justify-center relative right-44">
						<div className="w-full bg-white rounded-xl border-2 shadow-xl px-4 py-12">
							<h3 className="text-2xl font-semibold">Login</h3>
							<div className="mt-8 flex flex-col">
								<div className="mb-4">
									<p>Access Name</p>
									<Input />
								</div>
								<div className="mb-4">
									<p>Password</p>
									<Input.Password />
								</div>
							</div>
							<div className="mt-16">
								<button onClick={handleLogin} className="w-full h-12 bg-blue-800 text-white font-semibold text-xl">
									{isLoading ? (
										<LoadingOutlined className="text-white text-xl" />
									) : (
										"Login"
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginViews;
