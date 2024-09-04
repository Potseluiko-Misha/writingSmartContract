import { Cell, Address, toNano } from "ton-core";
import { hex } from "../build/main.compiled.json";
import { Blockchain } from "@ton-community/sandbox";
import { MainContract } from "../wrappers/MainContract";
import { send } from "process";

describe("test tests", () => {
	it("test of test", async() => {
		const codeCell = Cell.fromBoc(Buffer.from(hex,"hex"))[0];

		const blockchain = await Blockchain.create();

		const myContract = blockchain.openContract(
			await MainContract.createFromConfig({}, codeCell)
		);

		const senderWallet = await blockchain.treasury("sender");

		myContract.sendInternalMessage(senderWallet.getSender(),toNano("0.05"));
	});
});