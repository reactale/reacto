import React, { useState } from 'react'
import { withRouter } from "react-router";
import { subdir } from '../../services/url.service'
import './ReactDefCard.css'

const ReactoDefCard = (props) => {
	const [isVisible, setVisibility] = useState(true)
	
	const goPlayWithData = (ev, fileUrl) => {
		ev.preventDefault()
		let url = `/${subdir}/data/reacto-infos/data/${fileUrl}`;
		fetch(url)
		.then(res => res.text())
		.then(d => {
			let code = encodeURIComponent(d);
			props.history.push('/playground?code='+code)
		})
		.catch(err => {
			console.log('Error while sending code to playground')
			console.log(err)
			props.history.push('/playground')
		})
	}


    return (
        <div className="card mt-4 display-panel">
		  <div className="card-header" onClick={() => setVisibility(!isVisible)}>
            {props.rto.info}
		  	<i className={"fas fa-chevron-up ico " + (isVisible ? '': 'hide') }></i>
		  	<i className={"fas fa-chevron-down ico " + (isVisible ? 'hide': '') }></i>
		  </div>
		  <div className={"card-body " + (isVisible ? '': 'hide')}>
		    <h5 className="card-title font-mono">
		    	<input type="text" value={props.rto.name} readOnly className="input-in-disguise" />
		    	<i className="far fa-copy copy-reacto-icon"></i>
		    </h5>
            <p className="card-text">{props.rto.desc}</p>
		    <hr />
		    <h5>Examples</h5>
			{
				props.rto.examples.map( (ex, i) => (
					<div key={ex.name}>
						{(i+1) + '. ' + ex.name + ' | '}
						<a href="/playground" onClick={(ev) => goPlayWithData(ev, ex.fileUrl)} className="">Try it out</a>
						<i className="fas fa-angle-double-right theme-color ml-1"></i>
					</div>
				))
			}
		    {/* <div ng-repeat="ex in rto.examples">
		    	<a href="/" ng-click="vm.goToPlayground(ex.fileUrl)" className="">Try it out</a>
		    	<i className="fas fa-angle-double-right theme-color"></i>
		    </div> */}
		    
		  </div>
		</div>
    )
}

export default withRouter(ReactoDefCard)