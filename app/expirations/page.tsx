import parseCSV from "../parseCSV";

interface Expiration {
	testID: number;
	lotNumber: string;
	printedExpiration: string;
	extendedExpiration: string;
}

export default async function Expirations({
	searchParams: { q },
}: {
	searchParams: { [key: string]: string | undefined };
}) {
	const expirations = await parseCSV<Expiration>("app/data/expirations.csv", {
		testID: true,
	});
	const filteredExpirations = q
		? expirations.filter(({ lotNumber }) => lotNumber.includes(q))
		: expirations;
	const testIds = new Set(filteredExpirations.map(({ testID }) => testID));

	return (
		<>
			<h2>Expirations</h2>
			<ul>
				{Array.from(testIds, (testID) => (
					<li key={testID}>{testID}</li>
				))}
			</ul>
		</>
	);
}
