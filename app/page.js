"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]); // Garante que o efeito roda apenas quando o componente monta

  return null; // Como a página redireciona imediatamente, não há necessidade de renderizar nada
}
