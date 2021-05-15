import React, { useState, useEffect } from 'react'
// import { Helmet } from 'react-helmet'
import clsx from 'clsx'
import { Link } from "gatsby"
import { makeStyles, Container, Grid, Box } from '@material-ui/core'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
// import GridOnIcon from '@material-ui/icons/GridOn'
import { Footer, Seo } from '../components/common'

const useStyles = makeStyles({
    home: {

    },
    topBanner: {
        // background: '#d50000',
        // height: 300,
        position: 'relative',
        '& .redwall': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '75%',
            background: 'var(--theme-color)',
            zIndex: -1
        }
    },
    logoSec: {
        padding: "30px 0",
        textAlign: 'center',
        color: '#fff',
        userSelect: 'none !important',
        '& .logolink': {
            textDecoration: 'none',
            color: '#fff',
            fontSize: 50,
            '& .reacto-logo': {
                color: '#fff',
                borderColor: '#fff',
                height: 52,
                width: 70,
                fontSize: 50,
            }
        },
        '& .subtext': {
            fontSize: 23,
            marginTop: 7
        },
        '& .shortcuts': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,

            '& .fico': {
                background: '#f44336',
                borderRadius: 4,
                color: '#fff',
                fontSize: 30,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 50,
                marginBottom: 7,
                boxShadow: '-2px -2px 5px 0px #4a3e3e'
            },

            '& .icolink': {
                // display: 'inline-block'
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 90,
                color: '#fff',
                textDecoration: 'none',
                fontSize: 15
            },

            '& .icolink:hover': {
                transform: 'translateY(-5px)'
            },

            '& .cheatsheet': {
                width: 48,
                height: 48,
                marginTop: 5,
                color: '#ddd'
            },

            '& .list': {
                // marginLeft: 10
            },

            '& .terminal': {
                // marginLeft: 15
            }
        }
    },
    staticPlayground: {
        '& .half': {
            minHeight: 270,
            height: '100%',
            background: '#000',
            borderRadius: 4,
            overflow: 'hidden',
            fontFamily: `'Courier New', monospace`,
            position: 'relative',

            '& .header': {
                background: '#212529',
                color: '#fff',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                padding: '3px 15px',

                '& .decobtns': {
                    display: 'inline-flex',
                    position: 'absolute',
                    right: 15,
                    top: 5,
                    width: 50,
                    justifyContent: 'space-between',
                    color: 'orange',

                    '& svg': {
                        height: 14,
                        width: 14
                    }
                }


            },

            '& .body': {
                padding: '40px 15px 25px 15px',
                color: 'rgba(255, 255, 255, .9)',
                lineHeight: '20px',

                '& .reacto-hlight': {
                    color: '#fff',
                    background: '#d50000',
                    padding: '1px 5px',
                    fontWeight: 'bold'
                    // font-family: 'Courier New', monospace;

                }
            }
        }
    },
    simpleSec: {
        '& .header': {
            textAlign: 'center'
        },
        '& .para': {
            color: 'rgba(0, 0, 0, .6)',
            textAlign: 'justify'
        }
    }
})

const Home = props => {
    const classes = useStyles()
    const [processedTxt, setProcessedTxt] = useState({})
    useEffect(() => {

        const processRto = () => {
            if(window.rto) {
                const procsdTxt = {}
                procsdTxt.yearDiff = window.rto.process(`((r.cfg.setLocale.en))((r.calc. r.dt.year - 2019))`)
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
        <div className={classes.home}>
            <Seo/>

            {/* THE BANNER */}
            <div className={clsx(classes.topBanner, 'home-banner')}>
                <div className="redwall"></div>
                <div className={classes.logoSec}>
                    <Link to="/" className="logolink">
                        <span className="reacto-logo">r</span>
                        <span className="ml-10">reacto</span>
                    </Link>
                    <p className="subtext">Makes Texts Reactive</p>
                    <div className="shortcuts">
                        <Link to="/docs/dt" className="icolink">
                            <i className="fas fa-list-ul fico list"></i>
                            <span>documents</span>
                        </Link>
                        <Link to="/docs/cheatsheet" className="icolink">
                            <i className="fas fa-receipt fico"></i>
                            <span>cheatsheet</span>
                        </Link>
                        
                        <Link to="/playground" className="icolink">
                            <i className="fas fa-terminal fico terminal"></i>
                            <span>playground</span>
                        </Link>
                    </div>
                </div>




                {/* The Static Playground */}
                <Container maxWidth="md" className={classes.staticPlayground}>
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
                <Box mt={5} className={classes.simpleSec}>
                    <h1 className="header">What is a REACTO</h1>
                    <p className="para mt-5 responsive-text">
                        A "reacto" is a small token / piece of code that can be embedded into any text to give it the power to update itself dynamically. Thus a "reacto" turns a <i>normal</i> text into a <i>dynamic</i> text or a <i>reactive</i> text. The term "reacto" was made as a 'short' from "reactive token".
                    </p>
                </Box>

                {/* SECTION */}
                <Box mt={5} className={classes.simpleSec}>
                    <h1 className="header">Where to Use</h1>
                    <p className="para mt-5 responsive-text">
                        Reactos can be used while writing stories / tales in the new-age dynamic story writing platform <a href="https://reactale.com" target="_blank" rel="noreferrer noopener">Reactale</a> to give your tales reactive abilities and come to life.
                    </p>
                </Box>

                {/* SECTION */}
                <Box mt={5} className={classes.simpleSec}>
                    <h1 className="header">How to Use</h1>
                    <div className="para mt-5 responsive-text">
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
                    </div>
                </Box>

                {/* SECTION */}
                <Box mt={6} className={classes.simpleSec}>
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