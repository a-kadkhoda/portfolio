import "./globals.css";

import { cn } from "@/lib/utils";
import { Providers } from "@/app/Providers";
import { jetBrainsMono, manrope, unbounded, vazirmatn } from "@/assets/fonts";
import NavBar from "@/components/layouts/navbar/NavBar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased ",
        unbounded.variable,
        manrope.variable,
        jetBrainsMono.variable,
        vazirmatn.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-dvh px-20">
        <Providers>
          <NavBar />
          <main className="flex flex-col flex-1 ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
