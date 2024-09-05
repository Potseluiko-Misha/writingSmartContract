import { Cell, StateInit, beginCell, contractAddress, storeStateInit, toNano } from "ton-core";
import { hex } from "../build/main.compiled.json";

async function deployContract() {
	const codeCell = Cell.fromBoc(Buffer.from(hex,"hex"))[0];
	const dataCell = new Cell();   

	const stateInit: StateInit = {
		code: codeCell,
		data: dataCell,
	};
}

deployContract()