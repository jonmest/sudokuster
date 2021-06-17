import { completeCell, isSolved, deepArrayCopy } from "./_util.js";

const backtrack = (originalBoard) => {
	let board = deepArrayCopy(originalBoard);

	for (let row = 0; row < 9; row++) {
		for (let column = 0; column < 9; column++) {
			if (board[row][column] == 0) {
				completeCell(board, row, column);
				if (isSolved(board)) return board;
				let cell = board[row][column];
				if (Array.isArray(cell)) {
					for (let i = 0; i < cell.length; i++) {
						let board_2 = deepArrayCopy(board);
						board_2[row][column] = cell[i];
						if ((board_2 = backtrack(board_2))) {
							return board_2;
						}
					}
					return false;
				}
			}
		}
	}

	return false;
};

export default backtrack;
