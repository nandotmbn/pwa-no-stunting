import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import { Breadcrumb, Modal, Table } from "antd";
import React, { useState } from "react";

let dataSource: any[] = [];

for (let index = 0; index < 100; index++) {
	dataSource.push({
		key: index,
		serialNumber: "1110191022",
		name: "Orlando " + index,
		address: index + " Downing Street",
		status: index % 2 == 0 ? "active" : "suspend",
	});
}

const columns = [
	{
		title: "Nomor Registrasi Kader",
		dataIndex: "serialNumber",
		key: "serialNumber",
	},
	{
		title: "Nama Kader",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Alamat",
		dataIndex: "address",
		key: "address",
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
		render: (text: string) => {
			if (text == "active")
				return (
					<div className="text-green-600 border-2 border-green-600 bg-green-100 px-1 py-2 rounded-xl text-center">
						<p>Aktif</p>
					</div>
				);
			return (
				<div className="text-red-600 border-2 border-red-600 bg-red-100 px-1 py-2 rounded-xl text-center">
					<p>Diberhentikan</p>
				</div>
			);
		},
	},
	{
		title: "Aksi",
		render: (val: any) => {
			return (
				<div className="flex flex-row gap-2">
					<button className="flex-1">
						<EyeFilled className="text-green-500 text-2xl" />
					</button>
					<button className="flex-1">
						<EditFilled className="text-blue-500 text-2xl" />
					</button>
					<button className="flex-1">
						<DeleteFilled className="text-red-500 text-2xl" />
					</button>
				</div>
			);
		},
	},
];

function AgentsView() {
  const [isModalOpened, setModalOpened] = useState(false);
	return (
		<div className="h-full">
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-8 w-full h-full">
					<div className="h-full w-full flex-1 flex flex-col">
						<div className="flex-1 flex flex-row justify-between items-start">
							<h2 className="mb-6 text-xl font-semibold">
								Daftar Kader Stunting
							</h2>
							<button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
								+ Tambah Kader
							</button>
						</div>
						<div className="relative h-full flex-12">
							<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-w-1 scrollbar-thumb-gray-900 scrollbar-track-blue-100">
								<Table
									dataSource={dataSource}
									columns={columns}
									className="w-full"
								/>
							</div>
						</div>
						<Modal
							title="Tambah Kader Stunting"
							open={isModalOpened}
							onCancel={() => setModalOpened(false)}
							footer={false}
							maskClosable={false}
						>
							{/* <AddUserPanel
								isModalOpened={isModalOpened}
								setModalOpened={setModalOpened}
							/> */}
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AgentsView;
