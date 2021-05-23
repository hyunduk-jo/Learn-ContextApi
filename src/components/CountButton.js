import { useContext } from "react";
import { IndexContext } from "../contexts/IndexContext";

export default function CountButton() {
  const [state, dispatch] = useContext(IndexContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "addCnt" })}>+</button>
      <button onClick={() => dispatch({ type: "subCnt" })}>-</button>
      <h1>{state.count}</h1>
    </>
  )
}