export type CodeType = "punct" | "tag" | "attr" | "string" | "space";

export interface Code {
  plainText: string;
  kind: CodeType;
}
