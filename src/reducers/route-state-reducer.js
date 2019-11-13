const intialState = {
    dashboardLayout: false
}

const routeStateReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'UPDATE_LAYOUT':
            return {
                ...state,
                dashboardLayout: action.payload
            }

        default:
            return state
    }
}

export default routeStateReducer