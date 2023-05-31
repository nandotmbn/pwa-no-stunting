/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Collapse, Popconfirm } from "antd";
import {
	AccountBookFilled,
	ContainerOutlined,
	HighlightOutlined,
	InfoOutlined,
	KeyOutlined,
	LogoutOutlined,
	ReconciliationOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import cookiesHandler from "@/utils/storage/cookies";
const { Panel } = Collapse;

function NavigationBarAdministratorLayout() {
	const router = useRouter();
	const [activePanel, setActivePanel] = useState("");
	const [activePage, setActivePage] = useState("");

	const defineActivePage = (panel: string, page: string) => {
		if (panel == activePanel && page == activePage) return "bg-blue-600 text-white";
		return "";
	};

	const handleActivePage = () => {
		// console.log(router.route.split("/"));
		setActivePanel(router.route.split("/")[1]);
		setActivePage(router.route.split("/")[2] || "");
	};

	const handleLogout = () => {
		cookiesHandler.deleteCookie("access_token");
		router.replace("/");
	};

	useEffect(() => {
		handleActivePage();
	}, [router]);

	return (
		<div className="flex-4 h-full">
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-rounded-xl scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-blue-100 pt-4 pb-20">
					<button
						className={`flex flex-row w-full items-center justify-start mt-8 mb-1 py-2 hover:bg-blue-400 rounded-full px-2 hover:text-white ${defineActivePage(
							"dashboard",
							"agents"
						)}`}
					>
						<p className="text-xl ml-1">Kader Stunting</p>
					</button>
					<button
						className={`flex flex-row w-full items-center justify-start mt-8 mb-1 py-2 hover:bg-blue-400 rounded-full px-2 hover:text-white`}
					>
						<p className="text-xl ml-1">Ibu Hamil</p>
					</button>
					<button
						className={`flex flex-row w-full items-center justify-start mt-8 mb-1 py-2 hover:bg-blue-400 rounded-full px-2 hover:text-white`}
					>
						<p className="text-xl ml-1">Orang Tua</p>
					</button>

					<Popconfirm
						title="Logout"
						description="Are you sure to sign out?"
						onConfirm={() => {
							handleLogout();
						}}
						okText={
							<p className="text-blue-500 hover:text-white border-blue-100">
								Yes
							</p>
						}
						cancelText="No"
					>
						<button
							className={`flex flex-row w-full items-center justify-start mt-44 mb-1 hover:bg-red-400 rounded-full px-2 hover:text-white mt-44`}
						>
							<LogoutOutlined className="text-sm" />
							<p className="text-xs ml-1">Logout</p>
						</button>
					</Popconfirm>
				</div>
			</div>
		</div>
	);
}

export default NavigationBarAdministratorLayout;
