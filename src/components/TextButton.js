import { useContext } from "react"
import { IndexContext } from "../contexts/IndexContext"

export default function TextButton() {
  const [state, dispatch] = useContext(IndexContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "toKor" })}>한글</button>
      <button onClick={() => dispatch({ type: "toEng" })}>English</button>
      <h1>{state.text}</h1>
    </>
  )
}