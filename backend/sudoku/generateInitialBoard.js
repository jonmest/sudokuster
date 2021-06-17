import axios from "axios";

const generateInitialBoard = async (level) => {
	if (level != 1 && level != 2 && level != 3) {
		level = 1;
	}

	const board = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	];
	const URL = `http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=9&level=${level}`;
	const initialCells = await axios.get(URL).then((res) => res.data.squares);

	for (let cell of initialCells) {
		board[cell.y][cell.x] = cell.value;
	}
	return board;
};

export default generateInitialBoard;
