import Image from "next/image";
import React from "react";
import Profile from "../../../public/img/Ellipse 1 1.png";
import aboutText from "../../db/about.json";

export default function about() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center paddingX gap-10">
			<div className="textParagraph flex flex-col gap-10">
				<p>{aboutText.about1}</p>
				<p>{aboutText.about2}</p>
				<p>{aboutText.about3}</p>
				<p>{aboutText.about4}</p>
			</div>
			<Image src={Profile} alt="profile" />
		</div>
	);
}
