"use client";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				const query = new FormData(event.currentTarget).get("q");
				router.push(`/expirations?q=${query}`);
			}}
		>
			<input type="search" name="q" />
			<button>Search</button>
		</form>
	);
}
