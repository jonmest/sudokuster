import squareIndices from "./squareIndices.js";

const deepArrayCopy = (arr) => JSON.parse(JSON.stringify(arr));

const getRow = (board, row) => board[row];

const getColumn = (board, columnIndex) => {
	const column = [];
	for (let row = 0; row < 9; row++) {
		column.push(board[row][columnIndex]);
	}
	return column;
};

const getSquare = (board, square) => {
	let cells = [];
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (square == squareIndices[r][c]) {
				cells.push(board[r][c]);
			}
		}
	}
	return cells;
};

const isValidInput = (board, input, row, column) => {
	for (let cell of getRow(board, row)) {
		if (cell === input) return false;
	}
	for (let cell of getColumn(board, column)) {
		if (cell === input) return false;
	}
	for (let cell of getSquare(board, squareIndices[row][column])) {
		if (cell === input) return false;
	}
	return true;
};

const completeCell = (board, r, c) => {
	let used = [
		...getRow(board, r),
		...getColumn(board, c),
		...getSquare(board, squareIndices[r][c]),
	];
	let possibilities = [];
	for (let p = 1; p <= 9; p++) {
		if (!used.includes(p)) {
			possibilities.push(p);
		}
	}
	if (possibilities.length == 1) {
		board[r][c] = possibilities[0];
		return true;
	} else {
		board[r][c] = possibilities;
		return false;
	}
};

const occursOnce = (board, possibilities, segment, r, c) => {
	let updated = false;
	for (let i = 0; i < possibilities.length; i++) {
		let possibility = possibilities[i];
		let counter = 0;
		segment.forEach((cell) => {
			if (Array.isArray(cell)) {
				if (cell.includes(possibility)) {
					counter++;
				}
			} else {
				if (cell == possibility) {
					counter++;
				}
			}
		});
		if (counter == 1) {
			board[r][c] = possibility;
			updated = true;
			break;
		}
	}
	return updated;
};

const compare = (expected, actual) => {
	let array1 = expected.slice();
	let array2 = actual.slice();
	return (
		array1.length === array2.length &&
		array1.sort().every(function (value, index) {
			return value === array2.sort()[index];
		})
	);
};

const isSolved = (board) => {
	let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let valid = true;

	for (let r = 0; r < 9 && valid == true; r++) {
		if (!compare(expected, getRow(board, r))) {
			valid = false;
		}
	}

	for (let c = 0; c < 9 && valid == true; c++) {
		if (!compare(expected, getColumn(board, c))) {
			valid = false;
		}
	}

	for (let square = 1; square < 9 && valid == true; square++) {
		if (!compare(expected, getSquare(board, square))) {
			valid = false;
		}
	}
	return valid;
};

export {
	getColumn,
	getRow,
	getSquare,
	completeCell,
	occursOnce,
	compare,
	isSolved,
	deepArrayCopy,
	isValidInput,
};
