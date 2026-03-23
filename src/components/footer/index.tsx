import Link from "next/link"
import BrandLogo from "../../../public/Brand-Logo.svg"

export default function Footer() {
    return (
        <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
            <BrandLogo />
            <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                <Link className="text-body-sm text-blue-100" href="/use-terms">Termos de Uso</Link>
                <Link className="text-body-sm text-blue-100" href="/privacy-policy">Política de Privacidade</Link>
                <Link className="text-body-sm text-blue-100" href="/feedback">Enviar feedback</Link>
            </div>
        </footer>
    )
}