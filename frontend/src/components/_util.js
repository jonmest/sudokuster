const hasWon = (board) => {
	for (let row = 0; row < board.length; row++) {
		for (let column = 0; column < board[row].length; column++) {
			if (board[row][column] === 0) return false;
		}
	}
	return true;
};

const getInputDataFromEvent = (event) => {
	return {
		row: parseInt(event.target.getAttribute("row")),
		column: parseInt(event.target.getAttribute("column")),
		input: parseInt(event.data || 0),
	};
};

const populateBoard = (playerBoard, initialBoard) => {
	return playerBoard.map((row, rowIndex) => {
		return (
			<tr>
				{row.map((cell, columnIndex) => {
					return (
						<td>
							<input
								id={`${rowIndex}-${columnIndex}`}
								type='number'
								min='1'
								max='9'
								row={rowIndex}
								column={columnIndex}
								maxlength='1'
								value={cell === 0 ? "" : cell}
								disabled={
									initialBoard[rowIndex][columnIndex] === 0 ? false : true
								}
							/>
						</td>
					);
				})}
			</tr>
		);
	});
};

export { hasWon, populateBoard, getInputDataFromEvent };
