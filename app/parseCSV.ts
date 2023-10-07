import { readFile, type FileHandle } from "fs/promises";
import { parse, type ParseConfig } from "papaparse";

export default async function parseCSV<T>(
	path: string | Buffer | URL | FileHandle,
	dynamicTyping: ParseConfig["dynamicTyping"] = true,
) {
	const { data, errors } = parse<T>(
		await readFile(path, { encoding: "utf8" }),
		{ header: true, dynamicTyping },
	);

	if (errors.length) throw new AggregateError(errors);
	else return data;
}
