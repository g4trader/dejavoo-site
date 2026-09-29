import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
export const metadata: Metadata = { title:'Dejavoo | Pipoca Gourmet', description:'Pipoca gourmet Dejavoo: sabores marcantes, milho mushroom e uma experiência feita para transformar cada pacote em um momento especial.', openGraph:{title:'Dejavoo | Pipoca Gourmet',description:'Uma experiência gourmet que começa no primeiro olhar.',type:'website'} }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}<Analytics/></body></html>}
