// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const items: MenuProps["items"] = [
	{
		label: (
			<Link href="/program/electrical-engineering">
				<button className="text-left">Teknik Elektro</button>
			</Link>
		),
		key: "1",
	},
	{
		label: (
			<Link href="/program/informatics-and-computer-engineering">
				<button className="text-left">Teknik Informatika dan Komputer</button>
			</Link>
		),
		key: "2",
	},
];

function HeaderMainLayout() {
	const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
	const [isOnTop, setOnTop] = useState<Boolean>(false);
	const handleMobileMenuOpened = () => {
		setMobileMenuOpened(!isMobileMenuOpened);
	};

	const handleScroll = () => {
		if (window.scrollY) return setOnTop(true);
		setOnTop(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<nav
			className={`w-full fixed z-50 flex items-center justify-between md:justify-evenly md:gap-8 duration-700 bg-gradient-to-r to-blue-800 from-blue-400 via-blue-800`}
		>
			<div className="px-1 py-2">
				<Link href="/">
					<div className="flex flex-row items-center gap-4">
						<Image
							className="cursor-pointer hidden lg:inline"
							src="/images/long-logo.png"
							alt="Logo PENS"
							width={200}
							height={400}
						/>
					</div>
					<Image
						className="cursor-pointer lg:hidden"
						src="/images/long-logo.png"
						alt="Logo PENS"
						width={120}
						height={20}
					/>
				</Link>
			</div>

			<button
				className="flex flex-row items-center md:hidden bg-blue-900 text-sm text-white px-2 py-4"
				onClick={handleMobileMenuOpened}
			>
				{!isMobileMenuOpened ? (
					<>
						<p>Menu</p>
						<i className="material-icons text-yellow-500">expand_more</i>
					</>
				) : (
					<>
						<p>Close</p>
						<i className="material-icons text-yellow-500">expand_less</i>
					</>
				)}
			</button>

			{!isMobileMenuOpened ? null : (
				<ul className="absolute top-16 md:top-20 w-full md:hidden grid grid-cols-2 gap-4 px-4 py-8 bg-white">
					<li className="border-b-2 border-yellow-500">
						<Link href="/documentation">
							<button className="text-left text-xs">Dokumentasi</button>
						</Link>
					</li>
					<li className="border-b-2 border-yellow-500">
						<Link href="/developer">
							<button className="text-left text-xs">Tentang Pengembang</button>
						</Link>
					</li>
					<li className="border-b-2 border-yellow-500">
						<Link href="/auth/signin">
							<button className="text-left text-xs">Login</button>
						</Link>
					</li>
					<li className="border-b-2 border-yellow-500">
						<Link href="/auth/signup">
							<button className="text-left text-xs">Register</button>
						</Link>
					</li>
				</ul>
			)}

			<div className="flex flex-row gap-16 hidden md:flex">
				<ul className="hidden flex flex-row gap-2 text-white md:gap-4 text-xs text-gray-900 items-end py-4 md:flex">
					<li className="border-b-2 border-yellow-500">
						<Link href="/documentation">
							<button className="text-left">Dokumentasi</button>
						</Link>
					</li>
					<li className="border-b-2 border-yellow-500">
						<Link href="/developer">
							<button className="text-left text-xs">Tentang Pengembang</button>
						</Link>
					</li>
				</ul>

				<ul className="hidden flex flex-row gap-2 text-white md:gap-4 text-xs text-gray-900 items-end py-4 md:flex">
					<li className="border-b-2 border-yellow-500">
						<Link href="/auth/signin">
							<button className="text-left">Login</button>
						</Link>
					</li>
					<li className="border-b-2 border-yellow-500">
						<Link href="/auth/signup">
							<button className="text-left text-xs">Register</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default HeaderMainLayout;
