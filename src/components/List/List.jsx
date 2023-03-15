import React, { useContext } from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@mui/material'
import {Delete, MoneyOff } from "@mui/icons-material"
import useStyles from "./styles"
import {green,red} from "@mui/material/colors"
import { ExpenseTrackerContext } from '../../context/context'

const List = () => {
    const classes = useStyles()
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext)

  return (
    <MUIList dense={false} className={classes.list} >
        {transactions.map((trans)=>(
            <Slide direction='down' in mountOnEnter unmountOnExit key={trans.id} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{backgroundColor: trans.type === "Income" ? green[500] : red[500] }} >
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={trans.category} secondary={`$${trans.amount} - ${trans.date}`} />
                    <ListItemSecondaryAction >
                        <IconButton edge="end" aria-label='delete' onClick={()=>deleteTransaction(trans.id)} >
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
)
}

export default List