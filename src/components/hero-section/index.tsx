import { Clock, Store, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/buttons';
import Image from 'next/image';


export default function HeroSection() {
    return (
        <section className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
            <div className="flex flex-col gap-3 items-center lg:items-start justify-center">
                <h1 className="text-headline-lg md:text-headline-hg text-gray-100 text-center lg:text-start">Venda seus produtos como afiliado em um único lugar</h1>
                <div className='flex flex-col items-start justify-center gap-1'>
                    <div className='flex items-center justify-center gap-3'>
                        <Clock className='text-cyan-100' />
                        <p className='text-body-md text-gray-200'>Crie o seu site em menos de 5 minutos</p>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <Store className='text-cyan-100' />
                        <p className='text-body-md text-gray-200'>Acompanhe e otimize seu negócio online</p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start justify-center gap-4 mt-10'>
                    <Button as={Link} href="/blog" variant="primary">Criar loja grátis <ArrowRight /></Button>
                    <p className='text-body-xs text-gray-300'>Não precisa de cartão de crédito</p>
                </div>
            </div>
            <Image src="/background-hero.webp" alt="Hero Image" width={470} height={490} className='hidden lg:block' />
        </section>
    )
}