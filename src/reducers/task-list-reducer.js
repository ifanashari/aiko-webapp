// ==========><>|Task List Format|<><==========

// {
//     task: "",    =====><> | Task Title
//     desc: "",    =====><> | Task Description
//     status: "",  =====><> | Task Status
//     type: 0,     =====><> | Task Type (0 = default(not important), 1 = priority, 2 = less important, 3 = minor)
// }

// ==========><>|Task List Format|<><==========


const intialState = {
    taskList: [
        {
            task: "",
            desc: "",
            status: "",
            type: 0,
        }
    ],

    newTaskList: {
        task: "",
        desc: "",
        status: "",
        type: 0,
    }
}

const routeStateReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            // return {
            //     ...state,
            //     TAS: action.payload
            // }
            return state

        default:
            return state
    }
}

export default routeStateReducer