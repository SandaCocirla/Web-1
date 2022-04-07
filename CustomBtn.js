import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
  root:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    padding: "0 27px",
    boxSizing: "border-box",
    borderRadius: 0,
    background: "#ffede0",
    color: "#000",
    transform: "none",
    boxShadow: "1px 2px 0 0 #ffe0cc",
    transition:"background .3s, border-color .3s, color .3s",
    "&:hover":{
      backgroundColor: "#fff0e6"
    }, 

  },
  label: {
    textTransform:'capitalize',
  },
})(Button)
function CustomBtn(props) {
  return (
    <StyledButton variant="contained">{props.txt}</StyledButton>
   
  )
}

export default CustomBtn
