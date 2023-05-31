/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { HeaderAdministratorLayout } from "@/components";
import NavigationBarAdministratorLayout from "@/components/AdministratorLayout/NavigationBar";
import SidebarAdministratorLayout from "@/components/AdministratorLayout/Sidebar";
import cookiesHandler from "@/utils/storage/cookies";
import { useRouter } from "next/router";
import { message } from "antd";

interface IMainLayout {
	children: JSX.Element;
}

function AdministratorLayout({ children }: IMainLayout) {
	const [domLoaded, setDomLoaded] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setDomLoaded(true);
		// if (!cookiesHandler.getCookie("access_token")) {
		// 	router.replace("/");
		// 	message.info({content: "Anda harus login terlebih dahulu"})
		// }
	}, []);

	if (!domLoaded) return <div></div>;

	return (
		<div className="h-screen w-screen bg-blue-200 flex-col flex">
			<HeaderAdministratorLayout />
			<div className="flex flex-row flex-12 px-2 py-2 items-center justify-between gap-2">
				<NavigationBarAdministratorLayout />
				<div className="flex-20 bg-white rounded-2xl h-full p-4">
					{children}
				</div>
				<SidebarAdministratorLayout />
			</div>
		</div>
	);
}

export default AdministratorLayout;
