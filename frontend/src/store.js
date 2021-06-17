import { configureStore } from '@reduxjs/toolkit'
import difficultyReducer from './gameManager/difficultySlice'
import gameReducer from './gameManager/gameSlice'

export default configureStore({
  reducer: {
    difficulty: difficultyReducer,
    game: gameReducer,
  },
})