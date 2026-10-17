import { Card, CardContent } from "@/shared/components/ui/card";
import { cn } from "cn";
import React from "react";

type CodeType = "punct" | "tag" | "attr" | "string" | "space";

interface Code {
  plainText: string;
  kind: CodeType;
}

const code: Code[] = [
  {
    plainText: "<",
    kind: "punct",
  },

  {
    plainText: "Developer",
    kind: "tag",
  },
  {
    plainText: " ",
    kind: "space",
  },
  {
    plainText: "name",
    kind: "attr",
  },
  {
    plainText: "=",
    kind: "punct",
  },
  {
    plainText: '"Aliakbar Kadkhoda"',
    kind: "string",
  },
  {
    plainText: " ",
    kind: "space",
  },
  {
    plainText: "stack",
    kind: "attr",
  },
  { plainText: "=", kind: "punct" },
  { plainText: "{", kind: "punct" },
  {
    plainText: "[",
    kind: "punct",
  },
  {
    plainText: '"React"',
    kind: "string",
  },
  {
    plainText: ",",
    kind: "punct",
  },
  {
    plainText: " ",
    kind: "space",
  },
  {
    plainText: '"TypeScript"',
    kind: "string",
  },
  {
    plainText: ",",
    kind: "punct",
  },
  {
    plainText: " ",
    kind: "space",
  },
  {
    plainText: '"Node"',
    kind: "string",
  },
  { plainText: "]", kind: "punct" },
  {
    plainText: "}",
    kind: "punct",
  },
  {
    plainText: " ",
    kind: "space",
  },
  {
    plainText: "/>",
    kind: "punct",
  },
];

const SignatureChip = () => {
  const cssCode = (kind: CodeType) => {
    switch (kind) {
      case "tag":
        return "text-highlight";
      case "attr":
        return "text-info";
      case "punct":
        return "text-info";
      case "space":
        return "";
      case "string":
        return "text-code-string";

      default:
        return "";
    }
  };

  return (
    <Card className="w-max">
      <CardContent>
        {code.map((code, index) => (
          <span className={cn(cssCode(code.kind))} key={index}>
            {code.plainText}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default SignatureChip;
