const getAll = () => (dispatch) => (
    dispatch({
        type: "ALL", payload: ""
    })
)

const getPending = () => (dispatch) => (
    dispatch({
        type: "PENDING", payload: ""
    })
)
const getResolved = () => (dispatch) => (
    dispatch({
        type: "RESOLVED", payload: ""
    })
)

const getSettled = () => (dispatch) => (
    dispatch({
        type: "SETTLED", payload: ""
    })
)
const getUnResolved = () => (dispatch) => (
    dispatch({
        type: "UNRESOLVED", payload: ""
    })
)



export { getAll, getResolved, getPending; getUnResolved, getSettled}