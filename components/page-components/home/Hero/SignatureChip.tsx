import { Card, CardContent } from "@/components/ui/card";
import { code } from "@/data/hero";
import { CodeType } from "@/types/hero";
import { cn } from "cn";

export const codeTokenClass: Record<CodeType, string> = {
  tag: "text-highlight",
  attr: "text-info",
  punct: "text-info",
  space: "",
  string: "text-code-string",
};

const SignatureChip = () => {
  return (
    <Card className="w-max">
      <CardContent>
        {code.map(({ kind, plainText }, index) => (
          <span className={cn(codeTokenClass[kind], "font-mono")} key={index}>
            {plainText}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default SignatureChip;
