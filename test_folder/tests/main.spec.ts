import { Cell, Address  } from "ton-core";
import { hex } from "../build/main.compiled.json";
import { Blockchain } from "@ton-community/sandbox";
import { MainContract } from "../wrappers/MainContract";

describe("test tests", () => {
	it("test of test", async() => {
		const codeCell = Cell.fromBoc(Buffer.from(hex,"hex"))[0];

		const blockchain = await Blockchain.create();

		const myContract = blockchain.openContract(
			await MainContract.createFromConfig({}, codeCell)
		);
	});
});