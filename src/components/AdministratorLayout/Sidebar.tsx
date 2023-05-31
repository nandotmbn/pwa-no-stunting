import {
	DeleteOutlined,
	NotificationOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import React from "react";

function SidebarAdministratorLayout() {
	return (
		<div className="flex-1 h-full flex-col gap-4 flex pt-2">
			<div className="w-full h-12 flex items-center justify-center">
				<NotificationOutlined className="text-2xl text-gray-500" />
			</div>
			<div className="w-full h-12 flex items-center justify-center">
				<DeleteOutlined className="text-2xl text-gray-500" />
			</div>
			<div className="w-full h-12 flex items-center justify-center">
				<SettingOutlined className="text-2xl text-gray-500" />
			</div>
		</div>
	);
}

export default SidebarAdministratorLayout;
