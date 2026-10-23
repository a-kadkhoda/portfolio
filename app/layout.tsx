import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";
import { jetBrainsMono, manrope, unbounded, vazirmatn } from "@/lib/fonts";
import NavBar from "@/components/layout/Navbar";
import "./globals.css";

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
