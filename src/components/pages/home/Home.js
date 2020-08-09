import React from 'react'
import { ContextReactoInfo } from '../../../App'

const Home = () => {
    return (
        <div className="container">
            <h1 className="mt-4 mb-3">What is a “Reacto”?</h1>
            <section>
                <p>
                    <b>A Reacto (Reactos in plural) or a “reactive token”</b> is a small token / piece of code that can be
                    embedded in the text to make it a “reactive text”, which, when interpreted, enables a Reactale perform
                    incredible feats.
                </p>

                <p>
                    <b>For example,</b> consider a reactive text "<code>Hello, ((r.reader.name))</code>". Now, say, Sam is
                    reading this text on his device and if the device knows his name, then he will see, “Hello, Sam”,
                    otherwise
                    he will see “Hello, reader”.
                </p>
            </section>

            <h1 className="mt-5 mb-3">Reacto Playground</h1>
            <section>
                <a href="/playground">
                    <i className="fas fa-terminal reacto-playgrund-ico"></i>
                </a>
                <span>
                    Want to test some reactive text containing hundreds of reactos? Or just want to quicktest a simple
                    single reacto that you are planning to use? Don't worry, we got you covered. Just write / paste it in
                    our <a href="/playground"><u>"Reacto Playground"</u></a> and click on Convert button to
                    see
                    the result.
                </span>

                <div className="clearfix"></div>
            </section>

            <h1 className="mt-5 mb-3">Types of “Reacto”?</h1>
            <section className="mb-5">
                <p>
                    Reactos can be classified into various groupes.
                </p>
                <ul className="row reacto-types">
                    <ContextReactoInfo.Consumer>
                        { 
                            reactos => reactos.map( rto => 
                                <li className="col-12 col-sm-6 col-md-4" key={rto.id}>
                                    <a className="inner-container" href={'/reactos/' + rto.id}>
                                        <i className={rto.iconClass + ' ico'}></i>
                                        <div>{rto.name}</div>
                                    </a>
                                </li>                               
                            )
                            
                        }
                    </ContextReactoInfo.Consumer>
                </ul>
            </section>
        </div>
    )
}

export default Home;