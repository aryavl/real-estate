import React, { InputHTMLAttributes, ReactNode } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, TextFieldVariants{
    icon?: SvgIconComponent; 
    children?: ReactNode; 
}

const Input = ({ icon: Icon, children, ...props }: InputProps) => {
    // If an icon is provided, render an adorned TextField with the icon
    if (Icon) {
        return (
            <TextField
                {...props}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>{Icon && <Icon />}</IconButton>
                        </InputAdornment>
                    )
                }}
            >
                {children}
            </TextField>
        );
    } else {
        // If no icon is provided, render a simple input element
        return <input type="text" {...props} />;
    }
}

export default Input;
