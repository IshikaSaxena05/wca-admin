import { FormLabel, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Notes = () => {
  return (
   <Grid sx={{p:2,borderTop:'1px solid #dddddd',pt:5,pb:15}}>
    <form>
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <FormLabel sx={{color:'#000000'}}>
            Add Note
        </FormLabel>
        <TextField
        variant='filled'
        multiline
        InputProps={{disableUnderline:true}}
        placeholder='Enter a note here'
        rows={7}
        sx={{
            width:{xs:'100%',sm:'40%'},
            marginBottom:2,
            backgroundColor:'#F5F6FA'
        }}/>
        </Box>
        <Link style={{
            backgroundColor:'#28A745',
            textDecoration:'none',
            paddingTop:'10px',
            paddingBottom:'10px',
            paddingLeft:'40px',
            paddingRight:'40px',
            color:'white',
            borderRadius:'5px',
        }}>
        Save
        </Link>
    </form>
   </Grid>
  )
}

export default Notes