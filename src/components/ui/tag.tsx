export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-blue-400 rounded-lg px-3 py-1 w-fit">
            <span className="text-body-tag text-blue-200 uppercase">{children}</span>
        </div>
    )
}