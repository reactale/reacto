import React, { useState, useEffect } from 'react'
// import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
// import GridOnIcon from '@material-ui/icons/GridOn'
import { Footer } from '../components/common'


const Home = props => {
    const [processedTxt, setProcessedTxt] = useState({})
    useEffect(() => {

        const processRto = () => {
            if (window.rto) {
                const procsdTxt = {}
                procsdTxt.yearDiff = window.rto.process(`((r.calc. r.dt.year - 2019))`)
                procsdTxt.monthDate = window.rto.process(`((r.dt.month)) ((r.dt.date))`)
                setProcessedTxt(procsdTxt)
            }
            else {
                setTimeout(processRto, 500)
            }
        }

        processRto()

    }, [])
    return (
        <div className="home-page">

            {/* THE BANNER */}
            <div className="home-banner">
                <div className="redwall"></div>
                <div className="logo-sec">
                    <Link to="/" className="logolink">
                        <span className="reacto-logo">r</span>
                        <span className="ml-10">reacto</span>
                    </Link>
                    <p className="subtext">Makes Texts Reactive</p>
                    <div className="shortcuts">
                        <Link to="/cheatsheet" className="icolink">
                            <i class="fas fa-receipt fico"></i>
                            <span>cheatsheet</span>
                        </Link>
                        <Link to="/reactos" className="icolink">
                            <i className="fas fa-list-ul fico list"></i>
                            <span>reactos</span>
                        </Link>
                        <Link to="/playground" className="icolink">
                            <i className="fas fa-terminal fico terminal"></i>
                            <span>playground</span>
                        </Link>
                    </div>
                </div>




                {/* The Static Playground */}
                <Container maxWidth="md" className="static-playground">
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Box className="half" boxShadow={4}>
                                <div className="header">
                                    Reactive Text
                                    <div className="decobtns">
                                        <ChangeHistoryIcon />
                                        <CheckBoxOutlineBlankIcon />
                                        <RadioButtonUncheckedIcon />
                                    </div>
                                </div>
                                <div className="body">
                                    <h4>A Letter from the Past</h4>
                                    <p className="mt-15">
                                        Dear reader,
                                        <br />
                                        <br />
                                        ... I have seen the future. And I know you will read this letter exactly <span className="reacto-hlight">((r.calc. r.dt.year - 2019))</span> years from now, same month, same day ...
                                        <br />
                                    </p>
                                    <p className="mt-5">
                                        - Mr. Barick <br />
                                        <span className="reacto-hlight">((r.dt.month)) ((r.dt.date))</span>, 2019
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className="half" boxShadow={4}>
                                <div className="header">
                                    Converted Text
                                    <div className="decobtns">
                                        <ChangeHistoryIcon />
                                        <CheckBoxOutlineBlankIcon />
                                        <RadioButtonUncheckedIcon />
                                    </div>
                                </div>
                                <div className="body">
                                    <h4>A Letter from the Past</h4>

                                    <p className="mt-15">
                                        Dear reader,
                                        <br />
                                        <br />
                                        ... I have seen the future. And I know you will read this letter exactly <span className="reacto-hlight">{processedTxt.yearDiff}</span> years from now, same month, same day ...
                                        <br />
                                    </p>
                                    <p className="mt-5">
                                        - Mr. Barick <br />
                                        <span className="reacto-hlight">{processedTxt.monthDate}</span>, 2019
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Container maxWidth="md">

                {/* SECTION */}
                <Box mt={5} className="simple-sec">
                    <h1 className="header">What is a REACTO</h1>
                    <p className="para mt-5 responsive-text">
                        A "reacto" is a small token / piece of code that can be embedded into any text to give it the power to update itself dynamically. Thus a "reacto" turns a <i>normal</i> text into a <i>dynamic</i> text or a <i>reactive</i> text. The term "reacto" was made as a 'short' from "reactive token".
                    </p>
                </Box>

                {/* SECTION */}
                <Box mt={5} className="simple-sec">
                    <h1 className="header">Where to Use</h1>
                    <p className="para mt-5 responsive-text">
                        Reactos can be used while writing stories / tales in the new-age dynamic story writing platform <a href="https://reactale.com" target="_blank" rel="noreferrer noopener">Reactale</a> to give your tales reactive abilities and come to life.
                    </p>
                </Box>

                {/* SECTION */}
                <Box mt={5} className="simple-sec">
                    <h1 className="header">How to Use</h1>
                    <p className="para mt-5 responsive-text">
                        There are various to get started with reactos,
                        <ul className="mt-5 ulist">
                            <li className="mt-5">
                                <Link to="/reactos">Official Docs</Link> - Everything on all the reactos available e.g definitions, examples, use-cases etc.
                            </li>
                            <li className="mt-5">
                                <Link to="cheatsheet">The CheatSheet</Link> - One page that sums up everything, for a quick lookup or later reference.
                            </li>
                            <li className="mt-5">
                                <Link to="playground">The Playground</Link> - Try the examples given or write something of your own, it's a playground.
                            </li>
                        </ul>
                    </p>
                </Box>

                {/* SECTION */}
                <Box mt={6} className="simple-sec">
                    <h1 className="header">Whom to <s>Thank</s> Blame</h1>
                    <p className="para mt-5 responsive-text">
                        Reacto was created and is being developed as a sub-project of <a href="https://reactale.com" target="_blank" rel="noreferrer noopener">Reactale</a> by <a href="https://barick.in/" target="_blank" rel="noreferrer noopener">Suman Barick</a>.
                    </p>
                </Box>

            </Container>

            <Box mt={8}>
                <Footer />
            </Box>

        </div>
    )
}

export default Home