import React from 'react'
// import { Link } from "gatsby"
import { Layout } from '../../components/common'
import { Container, Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    editor: {

        '& .writearea': {

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
                            <textarea className="writearea"></textarea>
                        </div>
                        
                    </Grid>
                </Grid>
                    
                </Box>
            </Container>
        </Layout>
    )
}

export default Playground