import "./globals.css";

import { cn } from "@/shared/lib/utils";
import { Providers } from "@/shared/components/providers";
import { jetBrainsMono, manrope, unbounded, vazirmatn } from "@/shared/fonts";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
