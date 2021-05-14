import React, { useState, useRef, useEffect } from 'react'
// import { Link } from "gatsby"
import axios from 'axios'
import { Layout, RTxtEditor } from '../../components/common'
import { Container, Grid, Box, makeStyles, InputLabel, Select, Button } from '@material-ui/core'
import { getListOfExamples, getExampleCode } from '../../services/data.service'
import { getQueryObj, encodeForUrl, decodeFromUrl } from '../../services/util.service'
const FDLKEY = 'AIzaSyCW26msFzzqowPPbCPZTloukOzlw7aBD3g'    // FDLKEY = Firebase Dynamic Link Key
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
let savedShortLinks = {}    // to prevent an user to create shortLinks for same thing repeatedly
const SHORT_LINKS = "SHORT_LINKS"

const saveLinkToLocalStorage = (longUrl, shortUrl) => {
    savedShortLinks[longUrl] = shortUrl
    // Now save the New Links Object to LocalStorage
    localStorage.setItem(SHORT_LINKS, JSON.stringify(savedShortLinks))
}

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

        // get saved short links from localStorage
        savedShortLinks = JSON.parse(localStorage.getItem(SHORT_LINKS) || '{}')
    }, [])

    useEffect(() => {
        let rtxt = getQueryObj(props.location.search).rtxt
        if (rtxt) {
            rtxt = decodeFromUrl(rtxt)
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

    const shareRTxt = () => {
        const rTxt = document.getElementById('src-text-code-outer').querySelector('textarea').value
        if(!rTxt) {
            alert('Nothing to share ...')
            return
        }

        const longUrl = `${window.location.origin}/playground?rtxt=${encodeForUrl(rTxt)}`

        // See if it is already present in localStorage
        if(savedShortLinks[longUrl]) {
            alert('Share this link with anyone: ' + savedShortLinks[longUrl])
            return
        }

        const postURl = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${FDLKEY}`

        /**
         * Response Structure
         * {
                "shortLink": string,    (the thing to share)
                "previewLink": string   (an awesome flowchart)
            }
         */
        axios.post(postURl, { 
            dynamicLinkInfo: {
                domainUriPrefix: 'https://reacto.page.link',
                link: longUrl
            },
            suffix: {
                option: 'SHORT'
            }
         })
        .then(res => {
            console.log(res)
            const { data, status } = res
            if (status === 200) {
                const { shortLink } = data
                saveLinkToLocalStorage(longUrl, shortLink)

                alert('Share this link with anyone: ' + shortLink)
            }
            else {
                alert("Couldn't generate the short link ...")
            }
            // const { shortLink } 
            // 
        })
        .catch(err => alert("Couldn't generate the short link ..."))
        // console.log(longUrl)
    }

    return (
        <Layout 
            title="Playground" 
            description="Online editor for reacto which let's users test or play with reacto(s) and share the reactive text with the world"
        >
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
                    <Grid id="src-text-code-outer" item xs={12} md={6}>
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

                    <Grid item xs={12}>
                        <Button 
                            variant="outlined" 
                            color="secondary"
                            endIcon={<i className="fas fa-share"></i>}
                            onClick={shareRTxt}
                        >
                            Share
                        </Button>
                    </Grid>
                </Grid>
                    
                </Box>
            </Container>
        </Layout>
    )
}

export default Playground