import Link from "next/link";
import React from "react";

export default function Button() {
	return (
		<div>
			<button className="rounded-full bgBlue w-[7rem] textBabyBlue h-[2rem]">
				<Link href="/login">Sign up</Link>
			</button>
		</div>
	);
}
