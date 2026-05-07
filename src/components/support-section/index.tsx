import Card from "../ui/card";
import { PaintbrushVertical, Store, HeartHandshake } from "lucide-react";

export function SupportSection() {
    return (
        <section className="flex flex-col px-4 py-12 gap-8 bg-gray-700">
            <h2 className="text-headline-md text-gray-100">Sua loja de afiliados, simples, do jeito que deveria ser</h2>

            <Card variant="primary" className="flex flex-col gap-4">
                <PaintbrushVertical className="bg-blue-300 rounded-lg p-1" width={46} height={36} />
                <div className="flex flex-col gap-2">
                    <h2 className="text-headline-sm text-gray-100">Personalize seu site</h2>
                    <p className="text-body-sm text-gray-200">Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.</p>
                </div>
            </Card>
            <Card variant="secondary" className="flex flex-col gap-4">
                <Store className="bg-cyan-200 rounded-lg p-1" width={46} height={36} />
                <div className="flex flex-col gap-2">
                    <h2 className="text-headline-sm text-gray-100">Venda de qualquer loja</h2>
                    <p className="text-body-sm text-gray-200">Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.</p>
                </div>
            </Card>
            <Card variant="primary" className="flex flex-col gap-4">
                <HeartHandshake className="bg-blue-300 rounded-lg p-1" width={46} height={36} />
                <div className="flex flex-col gap-2">
                    <h2 className="text-headline-sm text-gray-100">Receba suporte amigável</h2>
                    <p className="text-body-sm text-gray-200">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</p>
                </div>
            </Card>
        </section>
    )
}