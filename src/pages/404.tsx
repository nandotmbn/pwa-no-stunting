import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>No Stunting</title>
				<meta
					name="description"
					content="Fish weighing equipment on fishing vessels is integrated with a recording and management system."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center justify-center my-48">
				<p>404</p>
				<p>Page is Not Found</p>
			</div>
		</>
	);
}
