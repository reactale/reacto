import React, { useEffect } from 'react'

const Loader = props => {
    useEffect(() => {
        window.showLoader = () => document.getElementById('rto-loader').style.display = 'flex'
        window.hideLoader = () => document.getElementById('rto-loader').style.display = 'none'
    }, [])
    return (
        <div id="rto-loader">
            <div className="logobox">
                <span className="el-r">r</span>
                <div className="rotator"></div>
            </div>
            <div className="text">Please Wait ...</div>
        </div>
    )
}

export default Loader