
export const metadata = {
  title: "VascãoHub",
  description: "Site de vídeos do Vascão",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
