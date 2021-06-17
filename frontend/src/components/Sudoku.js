import React from "react";
import Game from "./Game";
import { useSelector } from "react-redux";
import DifficultySelector from "./DifficultySelector";

export default function Sudoku() {
	const difficulty = useSelector((state) => state.difficulty.value);

	return (
		<>
			{difficulty == null && <DifficultySelector />}
			{difficulty !== null && <Game></Game>}
		</>
	);
}
