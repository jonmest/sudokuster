import React from "react";
import { useDispatch } from "react-redux";
import { setEasy, setMedium, setHard } from "../gameManager/difficultySlice";

export default function DifficultySelector() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Select difficulty</h1>
      <button type="button" class="btn" onClick={() => dispatch(setEasy())}>
        <span>Easy</span>
      </button>
      <button
        type="button"
        class="btn orange"
        onClick={() => dispatch(setMedium())}
        id="2"
      >
        <span>Medium</span>
      </button>
      <button
        type="button"
        class="btn red"
        onClick={() => dispatch(setHard())}
        id="3"
      >
        <span>Hard</span>
      </button>
    </>
  );
}
