import { createSlice } from "@reduxjs/toolkit";

export const difficultySlice = createSlice({
	name: "difficulty",
	initialState: {
		value: null,
	},
	reducers: {
		setEasy: (state) => {
			state.value = 1;
		},
		setMedium: (state) => {
			state.value = 2;
		},
		setHard: (state) => {
			state.value = 3;
		},
	},
});

export const { setEasy, setMedium, setHard } = difficultySlice.actions;

export default difficultySlice.reducer;
