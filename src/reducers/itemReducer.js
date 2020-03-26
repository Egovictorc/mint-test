import items from "../components/items"

const initState = {
    allItems: items,
    pending: [],
    reconciled: []
}


const itemsReducer = (state= initState, action) => {
    switch(action.type) {
        case "ALL":

        return { ...state};

        case "RECONCILED":
            const targetItems = state.items.filter( item => item.category === "reconciled" )
        return { ...state, targetItems};

        case "PENDING":
            const pendingItems = state.items.filter( item => item.category === "pending" )
        return {...state, pendingItems}

        default:
            return { ...state}
    }
}

export default itemsReducer