function globalPrint(text, trimLength) {
    let joinTextCounter = 0
    let tmpSplitedText = text.split(" ")
    let tmpResultText = []

    if(tmpSplitedText.length > trimLength){
        for(joinTextCounter; joinTextCounter < trimLength; joinTextCounter++){
            tmpResultText.push(tmpSplitedText[joinTextCounter])
        }

        tmpResultText.push("...")
    } else {
        tmpResultText = tmpSplitedText
    }

    return tmpResultText.join(" ")
}

const titleTrim = (title) => {
    return globalPrint(title, 2)
}

const descTrim = (desc) => {
    return globalPrint(desc, 15)
}

export {
    titleTrim,
    descTrim
}