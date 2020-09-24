import React from 'react'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'

const LeftPanel = props => {
    const { isLPVisible, setLPVisible, reactos, selectedId } = props
    const history = useHistory()

    const gotoRTOPage = rtoID => history.push(`/reactos/${rtoID}`)

    return (
        <div className={clsx('left-panel', !isLPVisible && 'collapssed')}>
            <i className="fas fa-clipboard-list left-panel-collapsser" onClick={() => setLPVisible(!isLPVisible)}></i>
            <h2 className="header">Category</h2>
            <ul>
                {
                    Object.values(reactos).map(rto =>
                        <li key={rto.id}
                            onClick={() => gotoRTOPage(rto.id)}
                            className={(selectedId === rto.id) ? 'active' : ''}>
                            <i className={rto.iconClass + ' ico'}></i>
                            {rto.name}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default LeftPanel