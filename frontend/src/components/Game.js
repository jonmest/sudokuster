import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, setWin, setCell, clearCell } from "../gameManager/gameSlice";
import { populateBoard, getInputDataFromEvent, hasWon } from "./_util";
import { getSolution, isValid, getNewBoard } from "../api/index";

export default function Game() {
	const dispatch = useDispatch();
	const difficulty = useSelector((state) => state.difficulty.value);
	const { win, playerBoard, initialBoard } = useSelector((state) => state.game);
	const boardRef = React.useRef(playerBoard);

	const handleInput = async (event) => {
		const data = getInputDataFromEvent(event);

		if (data.input === 0) {
			event.target.classList.remove("red");
			dispatch(clearCell({ row: data.row, column: data.column }));
			return;
		}

		if (await isValid({ ...data, board: boardRef.current })) {
			dispatch(setCell(data));
			event.target.classList.remove("red");
		} else {
			dispatch(clearCell({ row: data.row, column: data.column }));
			event.target.classList.add("red");
		}
	};

	useEffect(() => {
		if (playerBoard !== null) {
			boardRef.current = playerBoard;
			if (hasWon(playerBoard)) dispatch(setWin());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playerBoard]);

	useEffect(() => {
		getNewBoard(difficulty).then((board) => {
			dispatch(setBoard(board));
			boardRef.current = playerBoard;
		});
		window.addEventListener("input", handleInput);
		return () => {
			window.removeEventListener("input", handleInput);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			{win && <h1>You are done!</h1>}
			<table id='sudoku-grid'>
				{playerBoard !== null && populateBoard(playerBoard, initialBoard)}
			</table>

			{playerBoard !== null && (
				<button
					type='button'
					class='btn'
					onClick={async () =>
						dispatch(setBoard(await getSolution(initialBoard)))
					}
				>
					<span>Get solution</span>
				</button>
			)}
		</div>
	);
}
