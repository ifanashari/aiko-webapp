import { combineReducers } from 'redux'

import routeStateReducer from './route-state-reducer'

const allReducers = combineReducers({
    routeState: routeStateReducer,
})

export default allReducers