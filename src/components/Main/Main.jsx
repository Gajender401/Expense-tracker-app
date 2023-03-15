import React,{useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material'
import useStyles from "./styles"
import Form from '../Form/Form'
import List from '../List/List'
import { ExpenseTrackerContext } from '../../context/context'

const Main = () => {
    const classes = useStyles()
    const {balance} = useContext(ExpenseTrackerContext)

  return (
    <Card  >
        <CardHeader title="Expense Tracker" subheader="Powered by speachly"  />
        <CardContent>
            <Typography align='center' variant='h5' >
                Total Balance ${balance}
            </Typography>
            <Divider />
            <Form />
            <CardContent className={classes.cardContent} >
                <Grid container spacing={2}  >
                    <Grid item xs={12}   >
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </CardContent>
    </Card>
  )
}

export default Main