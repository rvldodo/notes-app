import React from "react";
import Button from "./Button";

export default function Form() {
	return (
		<div className="flex flex-col justify-center items-center gap-8 paddingY w-full">
			<input
				type="text"
				placeholder="Email"
				className="rounded-[20px] w-[70%] h-[3rem] textItim p-5 text-xl"
			/>
			<input
				type="password"
				placeholder="Password"
				className="rounded-[20px] w-[70%] h-[3rem] textItim p-5 text-xl"
			/>
			<Button route="/" text="Login" />
			<p className="textParagraph">
				not sign-up yet?{" "}
				<a href="/sign-up" className="textBlue underline leading-5">
					sign-up
				</a>{" "}
				now
			</p>
		</div>
	);
}
