import React from 'react'
// import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import { makeStyles, Container, Grid, Box } from '@material-ui/core'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

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
            height: '72%',
            background: 'var(--theme-color)',
            zIndex: -1
        }
    },
    logoSec: {
        padding: "30px 0",
        textAlign: 'center',
        color: '#fff',
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
            // color: 'rgba(0, 0, 0, .6)'
        },
        '& .para': {
            fontSize: 22,
            color: 'rgba(0, 0, 0, .7)'
        }
    }
})

const Home = props => {
    const classes = useStyles()
    return (
        <div className={classes.home}>

            {/* THE BANNER */}
            <div className={classes.topBanner}>
                <div className="redwall"></div>
                <div className={classes.logoSec}>
                    <Link to="/" className="logolink">
                        <span className="reacto-logo">r</span>
                        <span className="ml-10">reacto</span>
                    </Link>
                    <p className="subtext">Makes Text Dynamic</p>
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
                                        ... I have seen the future. And I know you will read this letter exactly <span className="reacto-hlight">{window.rto.process(`((r.calc. r.dt.year - 2019))`)}</span> years from now, same month, same day ...
                                        <br />
                                    </p>
                                    <p className="mt-5">
                                        - Mr. Barick <br />
                                        <span className="reacto-hlight">{window.rto.process(`((r.dt.month)) ((r.dt.date))`)}</span>, 2019
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
                    <p className="para mt-5">
                        A "reacto" is a small token / piece of code that can be embedded into any text to give it the power to update itself dynamically. Thus "reacto" turn a <i>normal</i> text into a <i>dynamic</i> text or a <i>reactive</i> text.
                    </p>
                </Box>

            </Container>
        </div>
    )
}

export default Home