import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
	name: "game",
	initialState: {
		initialBoard: null,
		playerBoard: null,
		win: false,
	},
	reducers: {
		setBoard: (state, action) => {
			state.initialBoard = action.payload;
			state.playerBoard = action.payload;
		},
		setCell: (state, action) => {
			const { row, column, input } = action.payload;
			if (state.initialBoard[row][column] === 0) {
				state.playerBoard[row][column] = input;
			}
		},
		clearCell: (state, action) => {
			const { row, column } = action.payload;
			if (state.initialBoard[row][column] === 0) {
				state.playerBoard[row][column] = 0;
			}
		},
		setWin: (state) => {
			state.win = true;
		},
	},
});

export const { setBoard, setWin, setCell, clearCell } = gameSlice.actions;

export default gameSlice.reducer;
