import generateInitialBoard from "./generateInitialBoard.js";
import { isValidInput } from "./_util.js";
import solve from "./solve.js";

const Sudoku = {
	generateInitialBoard,
	isValidInput,
	solve,
};

export default Sudoku;
