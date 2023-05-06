import React from "react";
import Form from "../components/Form";

export default function signUp() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center paddingX">
			<h1 className="textHeader textBabyBlue">WELCOME</h1>
			<p className="textParagraph2 textBabyBlue text-center">
				&quot;Welcome to Notess - your go-to platform for organizing, sharing,
				and collaborating on notes!&quot;
			</p>
			<Form />
		</div>
	);
}
