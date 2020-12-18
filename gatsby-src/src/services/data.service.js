import axios from 'axios'

let examples = null
let exampleCodes = {}   // url: codeString

const exampleUrl = '/data/reacto-infos/example.json'
export const getListOfExamples = async () => {
    if(examples) return examples
    try {
        const res = await axios.get(exampleUrl)
        examples = res.data
        return examples
    }
    catch (err) {
        return err
    }
}

const exampleRootUrl = '/data/reacto-infos/examples/'
export const getExampleCode = async url => {
    if(exampleCodes[url]) return exampleCodes[url]

    try {
        const res = await axios.get(exampleRootUrl + url)
        exampleCodes[url] = res.data
        return exampleCodes[url]
    }
    catch (err) {
        return err
    }
}
