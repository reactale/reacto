import React, { useState } from 'react'
import { ContextReactoInfo } from '../../../App'
import ReactoDefCard from '../../common/ReactoDefCard/ReactoDefCard'
import './ListOfReactos.css'

const ListOfReactos = (props) => {
    const [isLPVisible, setLPVisible] = useState(false)
    let selectedId = props.match.params.id
    let selectedIndex = 0
    return (
        <div>
            <div className={'left-panel' + (isLPVisible ? '' : ' collapssed' )}>
                <i className="fas fa-bars left-panel-collapsser" onClick={() => setLPVisible(!isLPVisible)}></i>
                <ul>
                    <ContextReactoInfo.Consumer>
                        {
                            rtos => rtos.map( (rto, i) => {
                                if(selectedId === rto.id) {
                                    selectedIndex = i
                                }

                                return (
                                <li key={rto.id} 
                                onClick={() => props.history.push('/reactos/' + rto.id)}
                                className={ (selectedId === rto.id) ? 'active' : '' }>
                                    {rto.name}
                                </li>
                                )
                            }
                            )
                        }
                    </ContextReactoInfo.Consumer>
                </ul>
            </div>

            <div className="mid-panel">
                <h3 className="theme-color mt-4 text-center">List of Reactos</h3>
                
                <ContextReactoInfo.Consumer>
                    {
                        rtos => 
                        {
                            return rtos.length > 0 && rtos[selectedIndex].reactos.map(r => 
                                <ReactoDefCard rto={r} key={r.info} />
                            )
                        }
                    }
                </ContextReactoInfo.Consumer>
                
            </div>
        </div>
    )
}

export default ListOfReactos