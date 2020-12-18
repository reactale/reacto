import React, { useState, useRef, useEffect } from 'react'
// import { Link } from "gatsby"
import { Layout } from '../../components/common'
import { Container, Grid, Box, makeStyles, InputLabel, Select } from '@material-ui/core'
import { getListOfExamples, getExampleCode } from '../../services/data.service'

const useStyles = makeStyles({
    option: {
        padding: '2px 15px',
        cursor: 'default'
    },
    editor: {
        background: '#000',
        marginTop: 25,
        borderRadius: 4,
        overflow: 'hidden',

        '& .header': {
            background: '#212529',
            color: '#fff',
            padding: '5px 15px',
            position: 'relative',

            '& .convertbtn': {
                position: 'absolute',
                top: '3px',
                right: '3px',
                padding: '5px 15px',
                background: 'var(--theme-color)',
                border: 'none',
                color: '#fff',
                userSelect: 'none',
                cursor: 'default',
                outline: 'none',
                borderRadius: '2px',

                '&:active': {
                    transform: 'scale(.98)',
                    transformOrigin: 'center right'
                }
            }
        },

        '& .writearea': {
            resize: 'vertical',
            width: '100%',
            minHeight: '45vh',
            background: '#000',
            color: 'rgba(255, 255, 255, 1)',
            border: 'none !important',
            outline: 'none !important',
            padding: 15,
            fontSize: 16,
            fontFamily: `'Courier New', monospace`,
        },

        '& .output': {
            minHeight: 'calc(45vh + 6px)',
            background: '#000',
            color: 'rgba(255, 255, 255, .8)',
            padding: 15,
            whiteSpace: 'pre',
            overflow: 'auto'
        },

        
    }
})

const Playground = props => {
    const classes = useStyles()
    const inRef = useRef()
    const outRef = useRef()
    const [listOfExamples, setListOfExamples] = useState([])
    const [exampleUrl, setExampleUrl] = useState('')

    useEffect(() => {
        getListOfExamples().then(r => setListOfExamples(r))
    }, [])

    const convert = () => {
        let rTxt = inRef.current.value
        if(!rTxt) return
        rTxt = window.rto.process(rTxt)
        outRef.current.innerHTML = rTxt
    }

    const handleChangeExample = e => {
        let exampleFileUrl = e.target.value
        setExampleUrl(exampleFileUrl)
        getExampleCode(exampleFileUrl)
        .then(code => inRef.current.value = code)
    }

    return (
        <Layout title="Playground">
            <Container maxWidth="lg">
                <Box
                    mb={8}
                >
                <Grid container spacing={1}>

                    <Grid item xs={12} className={"mt-25"}>
                        <InputLabel id="load-example-select-label">Load Example</InputLabel>
                        <Select
                            labelId="load-example-select-label"
                            id="load-example-select"
                            fullWidth
                            value={exampleUrl}
                            onChange={handleChangeExample}
                        >
                            <option aria-label="None" value="" />
                            {
                                listOfExamples.map(ex => 
                                <option 
                                    key={ex.fileUrl} 
                                    value={ex.fileUrl} 
                                    className={classes.option}>
                                    {ex.name}
                                </option>
                                )
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.editor}>
                            <div className="header">
                                Reactive Text
                                <button 
                                    type="button"
                                    className="convertbtn" 
                                    onClick={convert}
                                >
                                    <i className="fas fa-play"></i>&nbsp;Convert
                                </button>
                            </div>
                            <textarea 
                                ref={inRef}
                                className="writearea"
                                spellcheck="false"
                                placeholder="Write reactive text (text + reacto) here ..."
                            ></textarea>
                        </div>
                        
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={classes.editor}>
                            <div className="header">Converted Text</div>
                            <div ref={outRef} className="output">Converted text will appear here ...</div>
                        </div>
                    </Grid>
                </Grid>
                    
                </Box>
            </Container>
        </Layout>
    )
}

export default Playground