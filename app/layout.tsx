import type { Metadata } from "next";

export const metadata = {
	title: "COVID-19 Test Extensions",
} satisfies Metadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<h1>{metadata.title}</h1>
				{children}
			</body>
		</html>
	);
}
