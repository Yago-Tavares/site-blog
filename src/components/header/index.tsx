import Link from "next/link"
import BrandLogo from "../../../public/Brand-Logo.svg"
import Button from "../core/buttons"
import { useRouter } from "next/router"

export default function Header() {
    const route = useRouter();


    const activeLink = "text-action-sm text-blue-200"
    return (
        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-7">
            <BrandLogo />
            <nav className="flex gap-6 justify-center items-center">
                <Link className={(route.pathname === "/" ? activeLink : "text-action-sm") + " hidden md:block"} href="/">Home</Link>
                <Link className={(route.pathname === "/blog" ? activeLink : "text-action-sm") + " hidden md:block"} href="/blog">Blog</Link>
                <Button as={Link} href="/blog" variant="secondary">Começar</Button>
            </nav>
        </header>
    )
}
