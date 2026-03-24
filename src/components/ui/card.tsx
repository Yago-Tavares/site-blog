export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`bg-gray-500 rounded-lg p-12 flex w-full ${className}`}>
            {children}
        </div>
    )
}