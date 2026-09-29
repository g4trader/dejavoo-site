# Dejavoo — Site

Primeira versão do site institucional da Dejavoo, construída com Next.js, TypeScript e Tailwind CSS e preparada para Vercel.

## Rodar localmente
```bash
npm install
npm run dev
```
Abra http://localhost:3000.

## Deploy na Vercel
1. Crie um repositório no GitHub e envie esta pasta.
2. Importe o repositório na Vercel.
3. A Vercel detectará Next.js automaticamente; clique em Deploy.

## Estrutura
- `app/page.tsx`: página inicial e conteúdo principal.
- `app/layout.tsx`: metadata/SEO e layout global.
- `app/globals.css`: estilos globais.
- `components/Header.tsx`: navegação.
- `components/FlavorCard.tsx`: cards reutilizáveis dos sabores.
- `public/`: imagens e arquivos estáticos futuros.

## Próximas evoluções sugeridas
Substituir os placeholders por fotografias reais das embalagens/produtos; configurar Instagram/WhatsApp; adicionar catálogo ou checkout; criar páginas individuais de sabores; transformar Crônicas dos Cinco Sabores em uma experiência interativa; configurar domínio e SEO técnico final.
