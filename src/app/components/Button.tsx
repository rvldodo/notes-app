import { ButtonInt } from "@/interfaces/buttonInt";
import Link from "next/link";
import React from "react";

export default function Button({ route, text }: ButtonInt) {
	return (
		<div>
			<button className="rounded-full bgBlue w-[7rem] textBabyBlue h-[2rem]">
				<Link href={`/${route}`}>{text}</Link>
			</button>
		</div>
	);
}
