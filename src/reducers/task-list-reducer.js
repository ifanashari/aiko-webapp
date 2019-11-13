// ==========><>|Task List Format|<><==========

// {
//     task: "",    =====><> | Task Title
//     desc: "",    =====><> | Task Description
//     status: "",  =====><> | Task Status
//     type: 0,     =====><> | Task Type (0 = default(not important), 1 = priority, 2 = less important, 3 = minor)
// }

// ==========><>|Task List Format|<><==========


const intialState = {
    taskList: [],

    newTaskList: {
        task: "",
        desc: "",
        status: "",
        type: 0,
    }
}

const routeStateReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_TASKLIST':
            state.newTaskList.task = action.payload.task
            state.newTaskList.desc = action.payload.desc

            let tmpTaskList = state.taskList
            tmpTaskList.push(state.newTaskList)

            return {
                ...state,
                taskList: tmpTaskList,
                newTaskList: {
                    task: "",
                    desc: "",
                    status: "",
                    type: 0,
                }
            }

        case 'UPDATE_NEW_TASKLIST_TYPE':
            let tmpNewTaskList = state.newTaskList
            tmpNewTaskList.type = action.payload

            return {
                ...state,
                newTaskList: tmpNewTaskList
            }
        default:
            return state
    }
}

export default routeStateReducer