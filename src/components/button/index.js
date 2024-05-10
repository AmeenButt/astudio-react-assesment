import { Button } from '@mui/material'
import React, { useContext } from 'react'
import appContext from 'state/context';

export default function Default(props) {
    const state = useContext(appContext);
    const { secondaryColor } = state
    const { type, onClick, sx, disabled } = props
    let sortedSx = { ...sx }
    return (
        <Button sx={{
            backgroundColor: secondaryColor,
            borderRadius: '15px',
            padding: '8px 10px',
            '&:hover': {
                backgroundColor: sortedSx.backgroundColor ? sortedSx.backgroundColor : secondaryColor,
            },
            color: 'white',
            '&.Mui-disabled': {
                backgroundColor: sortedSx.backgroundColor ? `${sortedSx.backgroundColor}50` : '#2C599D50',
                color: 'white'
            },
            ...sx
        }}
            // variant='contained'
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {props.children}
        </Button>
    )
}
