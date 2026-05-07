import { cva, VariantProps } from "class-variance-authority"

const CardVariants = cva(
    "rounded-lg p-12 flex w-full",
    {
        variants: {
            variant: {
                default: "bg-gray-500",
                primary: "bg-blue-400",
                secondary: "bg-cyan-300",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof CardVariants> {
}

export default function Card({ variant, children, className }: CardProps) {
    return (
        <div className={CardVariants({ variant, className })}>
            {children}
        </div>
    )
}