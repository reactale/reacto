import React from 'react'
import './landing.scss'

const Landing = props => {
    return(
        <div id="landing-page">
            <div className="banner">
                <div className="container playground-demo">
                    <div className="row">
                        <div className="col-md half">
                            <div className="header">
                                Reactive Text (Text + Reacto)
                            </div>
                            <div className="body">
                                <h5>A Letter from the Past</h5>
                                <p className="mt-4">
                                    Dear reader, <br/>
                                    ... 
                                    <br/>
                                    I have seen the future. And I know you will read this letter exactly <span className="reacto-hlight">((r.calc. r.dt.year - 2019))</span> years from now
                                    <br/>
                                    ...
                                </p>
                                <p>
                                    - Mr. Barick <br/>
                                    <span className="reacto-hlight">((r.dt.month)) ((r.dt.date))</span>, 2019
                                </p>
                            </div>
                        </div>
                        <div class="col-md half">
                            <div className="header">
                                Converted Plain Text
                            </div>
                            <div className="body">
                                <h5>A Letter from the Past</h5>

                                <p className="mt-4">
                                    Dear reader, <br/>
                                    ... 
                                    <br/>
                                    I have seen the future. And I know you will read this letter approximately <span className="reacto-hlight">{window.rto.process(`((r.calc. r.dt.year - 2019))`)}</span> years from now 
                                    <br/>
                                    ...
                                </p>
                                <p>
                                    - Mr. Barick <br/>
                                    <span className="reacto-hlight">{window.rto.process(`((r.dt.month)) ((r.dt.date))`)}</span>, 2019
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing