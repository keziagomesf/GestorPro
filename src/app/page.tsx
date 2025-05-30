import Image from "next/image";
import heroImg from '@/assets/heroImg.png'

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)] bg-neutral-50">
      <h2 className="font-medium text-2xl mb-2">Gerencia sua empresa</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">Atendimentos, clientes</h1>
      <Image src={heroImg} alt="Imagem hero" width={600} className="max-w-sm md:max-w-xl border-rounded" />
    </main>
  );
}
