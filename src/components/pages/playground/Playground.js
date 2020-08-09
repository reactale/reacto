import React, { useState } from 'react'

const Playground = (props) => {
    // console.log(props.location.search)
    let rTxtFromUrl = ''
    const qparams = new URLSearchParams(props.location.search);
    rTxtFromUrl = qparams.get('code');

    const [rTxt, setRTxt] = useState(rTxtFromUrl || '')
    const [pTxt, setPTxt] = useState(window.rto.process(rTxtFromUrl || ''))

    const updateRTxt = (e) => {
        setRTxt(e.target.value)
    }

    const convertRtoPTxt = () => setPTxt(window.rto.process(rTxt || ''))

    // console.log(rTxt)
    return (
        <div className="px-4">
            <h3 className="theme-color mt-3 text-center">Reacto's Playground</h3>
                
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