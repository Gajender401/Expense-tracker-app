import { makeStyles } from '@mui/styles';
import {green,red} from "@mui/material/colors"

export default makeStyles(() => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));