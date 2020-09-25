import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './ReactDefCard.css'
import { Link } from 'react-router-dom';

const ReactoDefCard = props => {
	const [isVisible, setVisibility] = useState(true)
	const { rtoDef, goToPlayground, rtoID, isOpen } = props

	useEffect(() => setVisibility(!!isOpen), [isOpen])

	return (
		<div className="card mt-4 info-card">
			<div className="card-header" onClick={() => setVisibility(!isVisible)}>
				{rtoDef.info}
				<i className={clsx("fas fa-chevron-up ico", !isVisible && 'hide')}></i>
				<i className={clsx("fas fa-chevron-down ico", isVisible && 'hide')}></i>
			</div>
			<div className={clsx("card-body", !isVisible && 'hide')}>
				<h5 className="card-title font-mono">
					<input type="text" value={rtoDef.name} readOnly className="input-in-disguise" />
					{/* <i className="far fa-copy copy-reacto-icon"></i> */}
				</h5>
				<p className="card-text">{rtoDef.desc}</p>

				{
					rtoDef.examples.length > 0 && 
					<>
						<hr />
						<h5>Examples</h5>
					</>
				}
				{
					rtoDef.examples.map((ex, i) => (
						<div key={ex.name} className="mt-15">
							{(i + 1) + '. ' + ex.name + ' | '}
							<Link to="/playground" onClick={() => goToPlayground(rtoID, ex.fileUrl)} className="">Try it out</Link>
							<i className="fas fa-angle-double-right theme-color ml-1"></i>
						</div>
					))
				}

			</div>
		</div>
	)
}

export default ReactoDefCard