import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function HeaderAdministratorLayout() {
	return (
		<header
			id="header"
			className="flex flex-row flex-1 px-4 py-2 items-center justify-between"
		>
			<Link href="/">
				<Image
					className="cursor-pointer inline mr-44 p-2"
					src="/images/long-logo.png"
					alt="Logo PENS"
					width={80}
					height={1280}
					unoptimized={true}
				/>
			</Link>
			<Input.Search
				size="large"
				placeholder="Cari di Administrator"
				onSearch={(text: string) => {
					console.log(text);
				}}
				className="flex-13 mx-16"
			/>
			<div className="flex-1 flex flex-col items-end h-16 justify-center">
				<div className="h-16 flex flex-row justify-center items-center">
					<div className="w-12 h-12 rounded-full bg-red-600"></div>
				</div>
			</div>
		</header>
	);
}

export default HeaderAdministratorLayout;
