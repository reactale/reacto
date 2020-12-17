import React from 'react'
// import { Link } from "gatsby"
import { Layout } from '../../components/common'
import { Container, Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    editor: {
        background: '#000',
        marginTop: 25,
        borderRadius: 4,
        overflow: 'hidden',
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
            padding: 15
        },

        '& .header': {
            background: '#212529',
            color: '#fff',
            padding: '5px 15px',
        }
    }
})

const Playground = props => {
    const classes = useStyles()

    return (
        <Layout>
            <Container maxWidth="lg">
                <Box
                    mb={8}
                >


                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.editor}>
                            <div className="header">Reactive Text</div>
                            <textarea 
                                className="writearea"
                                spellcheck="false"
                                placeholder="Write reactive text (text + reacto) here ..."
                            ></textarea>
                        </div>
                        
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={classes.editor}>
                            <div className="header">Converted Text</div>
                            <div className="output">Converted text will appear here ...</div>
                        </div>
                    </Grid>
                </Grid>
                    
                </Box>
            </Container>
        </Layout>
    )
}

export default Playground