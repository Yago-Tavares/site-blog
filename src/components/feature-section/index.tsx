import Image from "next/image";
import Card from "../ui/card";
import Tag from "../ui/tag";
import Button from "../ui/buttons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeatureSection() {
    return (
        <section className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex-col gap-4">
                    <Tag>Simples</Tag>
                    <h2 className="text-headline-lg text-gray-100">Crie um catálogo de produtos online em poucos minutos</h2>
                </Card>
                <Card className="flex-col gap-4">
                    <Tag>Prático</Tag>
                    <h2 className="text-headline-lg text-gray-100">Venda seus produtos como afiliado em um único lugar</h2>
                </Card>
            </div>
            <Card className="flex-col md:flex-row gap-8 lg:gap-[5.5rem]">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col items-start gap-2">
                        <Tag>Personalizável</Tag>
                        <h2 className="text-headline-lg text-gray-100">Tenha uma loja online personalizada com a cara da sua marca</h2>
                    </div>
                    <Button as={Link} href="/" variant="primary" className="w-fit hidden md:flex">Criar loja grátis <ArrowRight /></Button>
                </div>
                <Image src="/background-feature.webp" alt="Hero Image" width={440} height={330} />
                <Button as={Link} href="/" variant="primary" className="md:hidden">Criar loja grátis <ArrowRight /></Button>
            </Card>
        </section>
    )
}