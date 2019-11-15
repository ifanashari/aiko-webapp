const filterByType = (data, type) => {
    let tmpData = data.filter((data) => {
        return data.type === type
    })

    return tmpData.length
}

export {
    filterByType
}
