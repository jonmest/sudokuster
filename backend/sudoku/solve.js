import { isSolved } from "./_util.js";
import backtrack from "./backtrack.js";
import constraintSolver from "./constraintSolver.js";

const solve = (board) => {
	let updated = true,
		solved = false;

	// Initially, attempt to solve it
	// using a constraint-based method
	// https://www.wikiwand.com/en/Sudoku_solving_algorithms
	while (updated && !solved) {
		updated = constraintSolver(board);
		solved = isSolved(board);
	}

	// If that won't do it,
	// use backtracking
	if (!solved) {
		board = backtrack(board);
		solved = isSolved(board);
	}

	return board;
};

export default solve;
