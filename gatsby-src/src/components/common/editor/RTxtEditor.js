import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
// import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'
import DOMPurify from 'dompurify';

const useStyles = makeStyles({
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
        '& .inner': {
            width: '100%',
            overflow: 'auto',
            padding: '20px 20px 30px',
            '& code': {
                color: '#fff'
            }
        },
    }
})

const RTxtEditor = props => {
    const classes = useStyles()
    const { btnFn, btnTxt, rTxt, children } = props
    const [srcRTxt, setSrcRTxt] = useState('')

    useEffect(() => {
        setSrcRTxt(rTxt)
    }, 
    [rTxt])

    const handleAction = e => {
        // If text was sent, then it's easy
        if (rTxt) {
            btnFn(DOMPurify.sanitize(srcRTxt))
        }
        else {
            const theTxt = e.target.closest('.the-editor').querySelector('code').innerText
            btnFn(DOMPurify.sanitize(theTxt))
        }
    }

    return (
        <div className={clsx(classes.editor, 'the-editor')}>
            <div className="header">
                Reactive Text
                {
                    btnFn &&
                    <button
                        type="button"
                        className="convertbtn"
                        onClick={handleAction}
                    >
                        <i className="fas fa-play"></i>&nbsp;{btnTxt}
                    </button>
                }
                
            </div>
            { 
                !children &&
                <textarea
                    value={srcRTxt}
                    className="writearea"
                    spellCheck="false"
                    placeholder="Write reactive text (text + reacto) here ..."
                    onChange={e => setSrcRTxt(e.target.value)}
                ></textarea>
            }
            {
                children &&
                <div className="inner"> { children } </div>
            }
        </div>
    )
}

export default RTxtEditor