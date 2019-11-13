import { combineReducers } from 'redux'

import routeStateReducer from './route-state-reducer'
import taskListReducer from './task-list-reducer'

const allReducers = combineReducers({
    routeState: routeStateReducer,
    taskList: taskListReducer,
})

export default allReducers