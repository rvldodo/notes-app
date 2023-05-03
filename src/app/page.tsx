import { NoteType } from "@/types/noteType";
import data from "../db/dummy.json";
import Cards from "./components/Cards";

export default function Home() {
	const myData: NoteType[] = data;
	return (
		<div className="min-h-screen flex justify-center items-center flex-wrap gap-5 paddingX paddingY">
			{myData.map((d: NoteType) => {
				return (
					<>
						<div className="basis-1/4">
							<Cards
								id={d.id}
								image_url={d.image_url}
								title={d.title}
								note={d.note}
								username={d.username}
							/>
						</div>
					</>
				);
			})}
		</div>
	);
}
