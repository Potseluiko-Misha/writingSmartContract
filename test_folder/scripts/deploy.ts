import { Cell, StateInit, beginCell, contractAddress, storeStateInit, toNano } from "ton-core";
import { hex } from "../build/main.compiled.json";
import qs from "qs";
import qrcode from "qrcode-terminal";

async function deployContract() {
	const codeCell = Cell.fromBoc(Buffer.from(hex,"hex"))[0];
	const dataCell = new Cell();   

	const stateInit: StateInit = {
		code: codeCell,
		data: dataCell,
	};

	const stateInitBuilder = beginCell();
	storeStateInit(stateInit)(stateInitBuilder);
	const stateInitCell = stateInitBuilder.endCell();

	const address = contractAddress(0, {
		code: codeCell,
		data: dataCell,
	});


	let deployLink =
		'https://app.tonkeeper.com/transfer/' +
		address.toString({
			testOnly: true,
		}) +
		"?" +
		qs.stringify({
			text: "Deploy contract by QR",
			amount: toNano("0.1").toString(10),
			init: stateInitCell.toBoc({idx: false}).toString("base64"),
		});

	qrcode.generate(deployLink, {small: true }, (qr) => {
		console.log(qr);
	});

	let scanAddr = 
		'https://testnet.tonscan.org/address/' +
		address.toString({
			testOnly: true,
		})

	console.log(scanAddr);

	}

deployContract()