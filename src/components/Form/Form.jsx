import React, { useContext,useState } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import useStyles from "./styles"
import { ExpenseTrackerContext } from '../../context/context'
import {v4 as uuidv4} from "uuid"
import { incomeCategories, expenseCategories } from '../../constants/constants'
import formatDate from '../../utils/formatDate'

const Form = () => {
    const classes = useStyles()

    const {addTransaction} = useContext(ExpenseTrackerContext)

    const initialState = {
        amount:"",
        category:"",
        type:"",
        date: formatDate(new Date)
    }

    const [formData, setFormData] = useState(initialState)

    const createTransaction = ()=>{
        const transaction = { ...formData, amount : Number(formData.amount), id: uuidv4() }
        addTransaction(transaction)
        setFormData(initialState)
    }

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories

  return (
    <Grid container spacing={2}>
        <Grid item xs={12} >
            <Typography align='center' variant='subtitle2' gutterBottom >
                ...
            </Typography>
        </Grid>
        <Grid item xs={6} >
            <FormControl fullWidth >
                <InputLabel>Type</InputLabel>
                <Select label="Type" value={formData.type} onChange={(e)=> setFormData({...formData, type: e.target.value})} >
                    <MenuItem value="Income" >Income</MenuItem>
                    <MenuItem value="Expense" >Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6} >
            <FormControl fullWidth > 
                <InputLabel>Category</InputLabel>
                <Select label="Category" value={formData.category} onChange={(e)=> setFormData({...formData, category: e.target.value})} >
                    {selectedCategories.map((catg)=>(
                    <MenuItem value={catg.type} key={catg.type} >{catg.type}</MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6} >
            <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e)=> setFormData({...formData, amount: e.target.value})} />
        </Grid>
        <Grid item xs={6} >
            <TextField type="date" label="" fullWidth value={formData.date} onChange={(e)=> setFormData({...formData, date: e.target.value})} />
        </Grid>
        <Grid item xs={12} >
            <Button variant="outlined" color="primary" fullWidth onClick={()=>createTransaction()} >Create</Button>
        </Grid>
    </Grid>
  )
}

export default Form