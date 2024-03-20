import  { ButtonHTMLAttributes, ReactNode } from 'react'

import {VariantProps, cva} from 'class-variance-authority'
import cn from '../utilis/cn'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    children:ReactNode,
    
}
const Button = ({children,className,variant, size,...props}:ButtonProps) => {
  return (
    <button  className={cn( buttonVariants({variant,className,size}))} {...props}>{children}</button>
  )
}

const buttonVariants = cva("rounded-md",{
    variants:{
        variant:{
            primary:"border px-4 py-2",
            danger:"border bg-red-400 px-4 py-2 text-white"
        },
        size:{
            sm:"text-sm px-1 py-0",
            md:"text-base px-2 py-1",
            lg:"text-xl px-4 py-2",
        }
    },
    defaultVariants:{
        variant:"primary"
    }
})

export default Button