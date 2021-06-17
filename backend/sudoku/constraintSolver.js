import {
	getColumn,
	getRow,
	getSquare,
	completeCell,
	occursOnce,
} from "./_util.js";
import squareIndices from "./squareIndices.js";

const convertEmptyCellsToPossibilities = (board) => {
	let updated = false;
	for (let row = 0; row < 9; row++) {
		for (let column = 0; column < 9; column++) {
			if (board[row][column] == 0) {
				updated = completeCell(board, row, column) || updated;
			}
		}
	}
	return [board, updated];
};

const checkForPossibilities = (board, updated) => {
	for (let row = 0; row < 9; row++) {
		for (let column = 0; column < 9; column++) {
			if (Array.isArray(board[row][column])) {
				let possibilities = board[row][column];
				updated =
					occursOnce(board, possibilities, getRow(board, row), row, column) ||
					occursOnce(
						board,
						possibilities,
						getColumn(board, column),
						row,
						column
					) ||
					occursOnce(
						board,
						possibilities,
						getSquare(board, squareIndices[row][column]),
						row,
						column
					) ||
					updated;
			}
		}
	}
	return [board, updated];
};

const returnEmptyCellsToZero = (board) => {
	for (let row = 0; row < 9; row++) {
		for (let column = 0; column < 9; column++) {
			if (Array.isArray(board[row][column])) {
				board[row][column] = 0;
			}
		}
	}
	return board;
};

const constraintSolver = (board) => {
	let updated = false;

	let [newBoard, wasUpdated] = convertEmptyCellsToPossibilities(board);
	(board = newBoard), (updated = wasUpdated);

	const possibilitiesResult = checkForPossibilities(board, updated);
	(board = possibilitiesResult[0]), (updated = possibilitiesResult[1]);

	board = returnEmptyCellsToZero(board);

	return updated;
};

export default constraintSolver;
