export const getQueryObj = qString => {
    const qObj = {}
    qString = qString[0] === '?' ? qString.substr(1) : qString
    const parts = qString.split('&')
    for (let part of parts) {
        const temp = part.split('=')
        qObj[temp[0]] = temp[1]
    }

    return qObj
}

export const encodeForUrl = txt => btoa(encodeURIComponent(txt))

export const decodeFromUrl = txt => decodeURIComponent(atob(decodeURIComponent(txt)))   // 2 layer of decoding required