import { NoteType } from "@/types/noteType";
import React from "react";

export default function Cards({ title, note, username, image_url }: NoteType) {
	return (
		<div className="flex flex-col justify-center border w-[17rem] h-[20rem] p-2 gap-5">
			<div className="flex flex-col gap-2">
				<h1 className="textTitle text-center">{title}</h1>
				<p className="textParagraph text-center">{note}</p>
			</div>
			<p className="textParagraph text-right italic">-{username}</p>
		</div>
	);
}
