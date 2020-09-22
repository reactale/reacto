import axios from 'axios'
import { rtoMasterInfoUrl } from './url.service'

let rtoMasterData = null

export const getRtoMasterData = async () => {
    try {
        if (rtoMasterData) return rtoMasterData
        const res = await axios.get(rtoMasterInfoUrl)
        if(res.status === 200) {
            rtoMasterData = res.data
        }
        return rtoMasterData
    }
    catch (err) {
        return {
            status: 'error', err
        }
    }
}