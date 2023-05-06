import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Navbar() {
	return (
		<div className="flex flex-row justify-between items-center paddingX w-full py-5">
			<h1 className="textBabyBlue text-3xl fontItim">
				<Link href="/">Notess</Link>
			</h1>
			<div className="textBabyBlue fontJost flex items-center justify-between gap-10">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Button route="login" text="Sign in" />
			</div>
		</div>
	);
}
