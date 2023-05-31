import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterMainLayout() {
	return (
		<div className="bg-gray-50 border-r-8 border-r-blue-800 border-t-8 border-t-yellow-400 w-full flex flex-col md:flex-row md:px-24 md:py-12 gap-8">
			<div className="flex-1 flex items-center p-4 md:p-0">
				<Image
					className="contain relative w-full"
					src="/LOGO_ITS.png"
					alt="Jumbotron PENS"
					width={400}
					height={400}
          unoptimized={true}
				/>
			</div>
			<div className="flex-2 text-xs md:text-base flex justify-center flex-col">
        <p>Kampus ITS, Sukolilo, Surabaya, Jawa Timur 60111</p>
        <p>Indonesia</p>
        <p>(031) 5947274</p>
        <p>humas@its.ac.id</p>

        <div className="mt-4 flex flex-row gap-4 text-cyan-500">
          <Link href="/">
            <p>Instagram</p>
          </Link>
          <Link href="/">
            <p>Twitter</p>
          </Link>
          <Link href="/">
            <p>Facebook</p>
          </Link>
        </div>
      </div>
			<div className="flex-2 text-xs md:text-base flex justify-center flex-col">
        <div className="mt-4 flex flex-col gap-4 text-cyan-500">
          <Link href="/">
            <p>Privacy and Policy</p>
          </Link>
          <Link href="/">
            <p>Terms and Condition</p>
          </Link>
        </div>
      </div>
		</div>
	);
}

export default FooterMainLayout;
