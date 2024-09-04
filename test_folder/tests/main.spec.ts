import { Cell } from "ton-core";
import { hex } from "../build/main.compiled.json";


describe("test tests", () => {
	it("test of test", async() => {
		const codeCell = Cell.fromBoc(Buffer.from(hex,"hex"))[0];


	});
});