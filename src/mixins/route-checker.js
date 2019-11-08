const routeChecker = () => {
    let tmpUrl = window.location.pathname
    let tmpConvertUrl = tmpUrl.split("/")
    return tmpConvertUrl[1] === 'dashboard' ? true : false
}

export {
    routeChecker
}