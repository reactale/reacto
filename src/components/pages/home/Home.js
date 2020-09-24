import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getRtoMasterData } from '../../services/data.service'

const Home = () => {
    const [reactos, setReactos] = useState({})

    useEffect(() => {
        (async () => {
            const rtos = await getRtoMasterData()
            setReactos(rtos)
        })()
    }, [])

    return (
        <div className="container shadow-lg rounded text-justify">
            <h1 className="mt-4 mb-3">What is a "Reacto"?</h1>
            <section>
                <p>
                    <b>A Reacto (Reactos in plural) or a "reactive token"</b> is a small token / piece of code that can be embedded into any text to give it the power to update itself dynamically. Thus "reacto" turns <i>normal texts</i> into <i>"reactive texts"</i>.
                </p>

                <p>
                    <b>For example,</b> consider a reactive text <code>Hello, ((r.reader.name))</code>. Now, say, Sam is
                    reading this text on his device and if the device knows his name, then he will see, “Hello, Sam”,
                    otherwise
                    he will see "Hello, reader".
                </p>

                <p>
                    <i>Reacto</i> started as a sub-project of <a href="https://reactale.com" target="_blank">Reactale</a> to give the later much of its abilities of dynamic story telling.
                </p>

                <div class="d-flex flex-row-reverse">
                    <Link to="/reactos/dt" type="button" class="btn btn-outline-primary d-flex align-items-center">
                        Explore Reacto(s)
                        <i class="fas fa-angle-double-right ml-2"></i>
                    </Link>
                </div>
            </section>

            <h1 className="mt-5 mb-3">Reacto Playground</h1>
            <section>
                <Link to="/playground">
                    <i className="fas fa-terminal reacto-playgrund-ico"></i>
                </Link>
                <span>
                    Want to test some reactive text containing hundreds of reactos? Or just want to quicktest a simple
                    single reacto that you are planning to use? Don't worry, we got you covered. Just write / paste it in
                    our <Link to="/playground"><u>"Reacto Playground"</u></Link> and click on Convert button to
                    see the result.
                </span>

                <div className="clearfix"></div>
            </section>

            <h1 className="mt-5 mb-3">Types of “Reacto”?</h1>
            <section className="mb-5">
                <p>
                    Reactos can be classified into various categories depending on their functionality.
                </p>
                <ul className="row reacto-types">
                    {
                        Object.values(reactos).map(rto =>
                            <li className="col-12 col-sm-6 col-md-4" key={rto.id}>
                                <Link className="inner-container" to={'/reactos/' + rto.id}>
                                    <i className={rto.iconClass + ' ico'}></i>
                                    <div>{rto.name}</div>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </section>
        </div>
    )
}

export default Home;