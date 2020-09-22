import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactoDefCard from '../../common/reactoDefCard/ReactoDefCard'
import LeftPanel from './LeftPanel'
import './ListOfReactos.css'
import { getRtoMasterData } from '../../services/data.service'
import { rtoExampleUrl } from '../../services/url.service'

const ListOfReactos = props => {
    const { history, match } = props
    const [isLPVisible, setLPVisible] = useState(false) // LeftPanel Visibility
    const [reactos, setReactos] = useState({})
    const [selectedId, setSelectedId] = useState('dt')
    // const selectedId = props.match.params.id

    // One time only
    useEffect(() => {
        (async () => {
            console.log('calling getRtoMasterData from losi page useEffect')
            const rtos = await getRtoMasterData()
            setReactos(rtos)
        })()
    }, [])

    // Whenever rtoID in url changes
    useEffect(() => setSelectedId(match.params.id), [match.params.id])

    /**
     * When user clicks on any example url of go-to-playground
     * @param {*} ev 
     * @param {*} rtoID 
     * @param {*} fileUrl 
     */
    const goToPlayground = (rtoID, fileUrl) => {
		let url = `${rtoExampleUrl}/${fileUrl}`;
		axios.get(url)
		.then(d => {
			let code = encodeURIComponent(d);
			history.push(`/playground?rtoID=${rtoID}&code=${code}`)
		})
		.catch(err => {
			console.log('Error while sending code to playground')
			console.log(err)
			history.push('/playground')
		})
	}

    return (
        <div className="listpage">

            {/* LEFT PANEL */}
            <LeftPanel 
                isLPVisible={isLPVisible}
                setLPVisible={setLPVisible}
                reactos={reactos}
                selectedId={selectedId}
            />

            {/* MAIN (MID) SECTION */}
            <div className="mid-panel">
                <h3 className="theme-color mt-4 text-center">List of Reactos</h3>
                {   
                    reactos[selectedId] &&
                    reactos[selectedId].reactos.map(rtoDef => 
                        <ReactoDefCard 
                            rtoDef={rtoDef} 
                            key={rtoDef.desc} 
                            rtoID={reactos[selectedId].id}
                            goToPlayground={goToPlayground}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ListOfReactos