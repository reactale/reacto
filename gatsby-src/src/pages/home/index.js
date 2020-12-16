import React from 'react'
import { makeStyles, Container, Grid, Box } from '@material-ui/core'
// import * as nothing from '../../lib/js/rto.all.min.js'

const rto = window['rto'] || { process: () => {}}

const useStyles = makeStyles({
    home: {
      
    },
    topBanner: {
        background: '#d50000',
        height: 300,
        paddingTop: 150
    },
    staticPlayground: {
        '& .half': {
            minHeight: 300,
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
                padding: '3px 15px'
                // font-size: 16px;
            },

            '& .body': {
                padding: '40px 15px 15px',
                color: 'rgba(255, 255, 255, .9)',

                '& .reacto-hlight': {
                    color: '#fff',
                    background: 'red',
                    padding: '1px 5px',
                    fontWeight: 'bold'
                    // font-family: 'Courier New', monospace;

                }
            }
        }
    }
})

const Home = props => {
    const classes = useStyles()
    return (
        <div className={classes.home}>
            
            <div className={classes.topBanner}>
                
                {/* The Static Playground */}
                <Container maxWidth="md" className={classes.staticPlayground}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Box className="half" boxShadow={4}>
                                <div className="header">
                                    Reactive Text (Text + Reacto)
                                </div>
                                <div className="body">
                                    <h4>A Letter from the Past</h4>
                                    <p className="mt-15">
                                        Dear reader, 
                                        <br/>
                                        <br/>
                                        ... I have seen the future. And I know you will read this letter exactly <span className="reacto-hlight">((r.calc. r.dt.year - 2019))</span> years from now, same month, same day ...
                                        <br/>
                                    </p>
                                    <p className="mt-5">
                                        - Mr. Barick <br/>
                                        <span className="reacto-hlight">((r.dt.month)) ((r.dt.date))</span>, 2019
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className="half" boxShadow={4}>
                                <div className="header">
                                    Converted Plain Text
                                </div>
                                <div className="body">
                                    <h4>A Letter from the Past</h4>

                                    <p className="mt-15">
                                        Dear reader, 
                                        <br/>
                                        <br/>
                                        ... I have seen the future. And I know you will read this letter exactly <span className="reacto-hlight">{rto.process(`((r.calc. r.dt.year - 2019))`)}</span> years from now, same month, same day ...
                                        <br/>
                                    </p>
                                    <p className="mt-5">
                                        - Mr. Barick <br/>
                                        <span className="reacto-hlight">{rto.process(`((r.dt.month)) ((r.dt.date))`)}</span>, 2019
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Home