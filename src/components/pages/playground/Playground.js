import React, { useState, useEffect } from 'react'
import './playground.css'

const Playground = props => {
    // console.log(props.location.search)
    const { location, history } = props
    const [rTxt, setRTxt] = useState('')    // Reactive Text
    const [pTxt, setPTxt] = useState('')    // Plain Text
    const [reactoID, setReactoID] = useState('')  // if was redirected from a Reacto Example

    useEffect(() => {
        const qparams = new URLSearchParams(location.search)
        const rTxtFromUrl = qparams.get('code') || ""
        const rtoID = qparams.get('rtoID') || ''
        setRTxt(rTxtFromUrl)
        setPTxt(window.rto.process(rTxtFromUrl))
        setReactoID(rtoID)
    }, 
    [location.search])

    const updateRTxt = (e) => {
        setRTxt(e.target.value)
    }

    const convertRtoPTxt = () => setPTxt(window.rto.process(rTxt || ''))

    const goBack = () => {
        let url = '/'
        if(reactoID) url = `/reactos/${reactoID}`
        history.push(url)
    }

    // console.log(rTxt)
    return (
        <div className="px-4" className="playground-page">
            <h3 className="theme-color mt-3 text-center">Reacto's Playground</h3>
            <i className="fas fa-arrow-left back-btn" onClick={goBack}></i>

            <label className="my-2">Paste some Reactive Text, i.e. text containing one or more Reacto(s) and click on "Convert" button</label>

            <h5 className="mt-4">(Input) Reactive Text</h5>
            <textarea className="form-control font-mono mt-1" rows="6" value={rTxt} onChange={updateRTxt}></textarea>

            <button onClick={convertRtoPTxt} className="btn btn-outline-danger btn-block mt-3">Convert</button>

            <h5 className="mt-5 border-bottom">(Converted) Plain Text</h5>
            <pre className="st-pre">{pTxt}</pre>

        </div>
    )
}

export default Playground