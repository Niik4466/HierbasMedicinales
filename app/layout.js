import "./globals.css";

// Importamos "Providers": Nos dará acceso a los componentes de Chakra UI
import { Providers } from "@/app/providers/provider";

export const metadata = {
  title: "Hierbas Medicinales",
  description: "Repertorio de hierbas medicinales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className = "navegacion">
        {/* Envolvemos todo nuestro contenido */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
