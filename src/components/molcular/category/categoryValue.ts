const categoryValue = [
  { kind: "ALL", value: "전체" },
  { kind: "IT", value: "IT 인터넷" },
  { kind: "BUSINESS", value: "비즈니스" },
  { kind: "MARKETER", value: "마케팅" },
  { kind: "DESIGN", value: "디자인" },
  { kind: "MEDIA", value: "미디어" },
  { kind: "ENGINEERING", value: "엔지니어링" },
  { kind: "EDU", value: "교육" },
];

export type CategoryKindType =
  | "ALL"
  | "IT"
  | "BUSINESS"
  | "MARKETER"
  | "DESIGN"
  | "MEDIA"
  | "ENGINEERING"
  | "EDU";

export default categoryValue;
