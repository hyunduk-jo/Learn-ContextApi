export const initState = {
  text: "Default Value",
  count: 0
}

export const indexReducer = (state, action) => {
  switch (action.type) {
    case "toKor":
      return {
        ...state,
        text: "한국어 입니다."
      }
    case "toEng":
      return {
        ...state,
        text: "This is English"
      }
    case "addCnt":
      return {
        ...state,
        count: state.count + 1
      }
    case "subCnt":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return initState
  }
}