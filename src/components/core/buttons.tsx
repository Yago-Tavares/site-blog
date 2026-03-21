import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
    "rounded-full flex items-center justify-center cursor-pointer py-3 px-5 text-action-sm",
    {
        variants: {
            variant: {
                primary: "bg-blue-300 text-white hover:bg-blue-200",
                secondary: "bg-gray-100 text-gray-800 hover:bg-blue-100",
            },
            disabled: {
                true: "opacity-30 pointer-events-none",
            },
        },
    }
)

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
    children: React.ReactNode
    className?: string
}

type ButtonAsButtonProps = ButtonBaseProps & {
    as?: "button"
    disabled?: boolean
} & Omit<React.ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps | "as" | "disabled">

type ButtonAsOtherProps<T extends React.ElementType> = ButtonBaseProps & {
    as: T
} & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonBaseProps | "as" | "disabled">


const Button = <T extends React.ElementType>({
    as,
    variant,
    disabled,
    children,
    className,
    ...props
}: ButtonAsButtonProps | ButtonAsOtherProps<T>) => {
    const Component = as ?? "button";

    return (
        <Component
            className={buttonVariants({ variant, disabled, className })}
            {...props}
        >
            {children}
        </Component>
    )
}

export default Button
