const taskListCategoryCounter = (data, type) => {
    let tmpData = filterByCategory(data, type)

    return tmpData.length
}

const filterByCategory = (data, type) => {
    let tmpData = data.filter((data) => {
        return data.type === type
    })

    return tmpData
}

export {
    taskListCategoryCounter,
    filterByCategory
}
