import axios from "axios";

const GET_BOARD_URL = process.env.REACT_APP_GET_BOARD_URL;
const GET_ANSWER_URL = process.env.REACT_APP_GET_ANSWER_URL;
const IS_VALID_URL = process.env.REACT_APP_IS_VALID_URL;

const getSolution = async (board) => {
	return axios.post(GET_ANSWER_URL, { board }).then((res) => res.data.solved);
};

const isValid = async ({ board, row, column, input }) => {
	return axios
		.post(IS_VALID_URL, { board, row, column, input })
		.then((res) => res.data.valid);
};

const getNewBoard = async (difficulty) => {
	const URL = `${GET_BOARD_URL}=${difficulty}`;
	return axios.get(URL).then((res) => res.data.board);
};

export { getSolution, isValid, getNewBoard };
