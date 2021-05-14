import React, { useState, useRef, useEffect } from 'react'
// import { Link } from "gatsby"
import { Layout, RTxtEditor } from '../../components/common'
import { Container, Grid, Box, makeStyles, InputLabel, Select } from '@material-ui/core'
import { getListOfExamples, getExampleCode } from '../../services/data.service'
import { getQueryObj } from '../../services/util.service'

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
    const outRef = useRef()
    const [listOfExamples, setListOfExamples] = useState([])
    const [exampleUrl, setExampleUrl] = useState('')
    const [langs, setLangs] = useState({})
    const [srcRTxt, setSrcRTxt] = useState('')

    useEffect(() => {
        getListOfExamples().then(r => setListOfExamples(r))
        setLangs(window.rto.getLocales() || {})
    }, [])

    useEffect(() => {
        let rtxt = getQueryObj(props.location.search).rtxt
        if (rtxt) {
            rtxt = atob(decodeURIComponent(rtxt))
            setSrcRTxt(rtxt)
            const plainTxt = window.rto.process(rtxt)
            outRef.current.innerHTML = plainTxt
        }
        
    }, [props.location.search])

    const convert = editedRTxt => {
        if(!editedRTxt) return
        const rTxt = window.rto.process(editedRTxt)
        outRef.current.innerHTML = rTxt
    }

    const handleChangeExample = e => {
        let exampleFileUrl = e.target.value
        setExampleUrl(exampleFileUrl)
        getExampleCode(exampleFileUrl)
        .then(code => {
            setSrcRTxt(code)
            outRef.current.innerHTML = ''
        })
    }

    return (
        <Layout title="Playground">
            <Container maxWidth="lg">
                <Box
                    mb={8}
                >
                <Grid container spacing={1}>

                    <Grid item xs={12} sm={6} className={"mt-25"}>
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
                    <Grid item xs={12} sm={6} className={"mt-25"}>
                        <InputLabel id="available-language-codes-label">Language Codes</InputLabel>
                        <Select
                            labelId="available-language-codes-label"
                            id="available-language-codes"
                            fullWidth
                            // value={exampleUrl}
                            // onChange={handleChangeExample}
                        >
                            <option aria-label="None" value="" />
                            {
                                Object.keys(langs).map(langCode => 
                                <option 
                                    key={langCode} 
                                    value={langCode} 
                                    className={classes.option}>
                                    { `${langs[langCode]} - ${langCode}` }
                                </option>
                                )
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RTxtEditor
                            btnFn={convert}
                            btnTxt="Convert"
                            rTxt={srcRTxt}
                        />
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