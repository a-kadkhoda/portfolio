import "./globals.css";

import { cn } from "@/shared/lib/utils";
import { Providers } from "@/shared/components/providers";
import { jetBrainsMono, manrope, unbounded, vazirmatn } from "@/shared/fonts";
import NavBar from "@/shared/components/layouts/navbar";

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
