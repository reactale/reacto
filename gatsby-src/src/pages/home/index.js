import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    home: {
      
    },
    topBanner: {
        background: '#d50000'
    }
})

const Home = props => {
    const classes = useStyles()
    return (
        <div className={classes.home}>
            
            <div className={classes.topBanner}>
                
            </div>

        </div>
    )
}

export default Home