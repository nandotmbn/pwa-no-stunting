import { ExclamationCircleOutlined } from "@ant-design/icons";
import React from "react";

function CenterEmpty({message}:{message: string}) {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center">
			<ExclamationCircleOutlined className="font-bold text-6xl text-gray-300" />
			<p className="font-bold text-4xl text-gray-300">
				{message}
			</p>
		</div>
	);
}

export default CenterEmpty;
