import {
  NameClass,
  NamePartClass,
} from "@govuk-one-login/data-vocab/credentials";

const createName = (...names: string[]): NameClass =>
  Object.freeze<NameClass>({
    nameParts: [
      ...names.slice(0, -1).map<NamePartClass>((n) =>
        Object.freeze<NamePartClass>({
          type: "GivenName",
          value: n,
        })
      ),
      ...names.slice(-1).map<NamePartClass>((n) =>
        Object.freeze<NamePartClass>({
          type: "FamilyName",
          value: n,
        })
      ),
    ],
  });

export const ALICE_JANE_LAURA_DOE: NameClass = createName(
  "ALICE",
  "JANE",
  "LAURA",
  "DOE"
);
export const Alice_Jane_Laura_Doe: NameClass = createName(
  "Alice",
  "Jane",
  "Laura",
  "Doe"
);
export const ALICE_JANE_SMITH: NameClass = createName("ALICE", "JANE", "SMITH");
export const Alice_Jane_Smith: NameClass = createName("Alice", "Jane", "Smith");
export const ALICE_JANE_PARKER: NameClass = createName(
  "ALICE",
  "JANE",
  "PARKER"
);
export const Alice_Jane_Parker: NameClass = createName(
  "Alice",
  "Jane",
  "Parker"
);
export const ALISON_JANE_PARKER: NameClass = createName(
  "ALISON",
  "JANE",
  "PARKER"
);
export const Alison_Jane_Parker: NameClass = createName(
  "Alison",
  "Jane",
  "Parker"
);
export const Billy_Batson: NameClass = createName("Billy", "Batson");
export const Bob_Parker: NameClass = createName("Bob", "Parker");
export const CLAIRE_AARTS: NameClass = createName("CLAIRE", "AARTS");
export const Claire_Aarts: NameClass = createName("Claire", "Aarts");
export const James_Moriarty: NameClass = createName("James", "Moriarty");
export const Joe_Schmoe: NameClass = createName("Joe", "Schmoe");
export const John_Roberts: NameClass = createName("John", "Roberts");
export const KABIR_SINGH: NameClass = createName("KABIR", "SINGH");
export const Kabir_Singh: NameClass = createName("Kabir", "Singh");
export const KENNETH_DECERQUEIRA: NameClass = createName(
  "KENNETH",
  "DECERQUEIRA"
);
export const Kenneth_Decerqueira: NameClass = createName(
  "Kenneth",
  "Decerqueira"
);
export const KENNETH_JONES: NameClass = createName("KENNETH", "JONES");
export const Kenneth_Jones: NameClass = createName("Kenneth", "Jones");
export const MICHAEL_DECERQUEIRA: NameClass = createName(
  "MICHAEL",
  "DECERQUEIRA"
);
export const Michael_Decerqueira: NameClass = createName(
  "Michael",
  "Decerqueira"
);
export const Mary_Watson: NameClass = createName("Mary", "Watson");
export const NORA_PORTER: NameClass = createName("NORA", "PORTER");
export const Nora_Porter: NameClass = createName("Nora", "Porter");
export const SAUL_GOODMAN: NameClass = createName("SAUL", "GOODMAN");
export const Saul_Goodman: NameClass = createName("Saul", "Goodman");
export const TOM_HARDY: NameClass = createName("TOM", "HARDY");
export const Tom_Hardy: NameClass = createName("Tom", "Hardy");
