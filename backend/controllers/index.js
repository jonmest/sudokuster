import Sudoku from "../sudoku/index.js";

const getBoard = async (req, res) => {
	const difficulty = req.query.difficulty;
	if (difficulty > 3 || difficulty < 1) return res.status(400);

	const board = await Sudoku.generateInitialBoard(difficulty);
	res.send({ board });
};

const isValid = (req, res) => {
	const { board, row, column, input } = req.body;
	if (
		board.length !== 9 ||
		board[0].length !== 9 ||
		row < 0 ||
		row > 8 ||
		column < 0 ||
		column > 8 ||
		input < 0 ||
		input > 8
	)
		return res.status(400);

	const valid = Sudoku.isValidInput(board, input, row, column);
	res.send({ valid });
};

const getAnswer = (req, res) => {
	const board = req.body.board;
	if (board.length !== 9 || board[0].length !== 9) return res.status(400);

	const solved = Sudoku.solve(board);
	res.send({ solved });
};

export { getBoard, getAnswer, isValid };
