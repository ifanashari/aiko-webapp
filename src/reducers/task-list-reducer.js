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
            task: "Alpha Bravo",
            desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            status: false,
            type: 1,
        },

        {
            task: "Juliet Kilo Lima",
            desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            status: true,
            type: 0,
        },

        {
            task: "Charlie Delta Echo Foxtrot Golf Hotel India",
            desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            status: false,
            type: 3,
        },

        {
            task: "Mike November Oscar",
            desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            status: true,
            type: 2,
        }
    ],

    newTaskList: {
        task: "",
        desc: "",
        status: false,
        type: 0,
    }
}

const routeStateReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_TASKLIST':
            state.newTaskList.task = action.payload.task
            state.newTaskList.desc = action.payload.desc

            let addTmpTaskList = state.taskList
            addTmpTaskList.push(state.newTaskList)

            return {
                ...state,
                taskList: addTmpTaskList,
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

        case 'UPDATE_TASKLIST_STATUS':
            let updateStatusTmpTaskList = state.taskList
            updateStatusTmpTaskList[action.payload].status = !updateStatusTmpTaskList[action.payload].status

            return {
                ...state,
                taskList: updateStatusTmpTaskList
            }

        case 'REMOVE_TASKLIST':
            let removeTmpTaskList = state.taskList
            removeTmpTaskList.splice(action.payload, 1)

            return {
                ...state,
                taskList: removeTmpTaskList
            }

        default:
            return state
    }
}

export default routeStateReducer