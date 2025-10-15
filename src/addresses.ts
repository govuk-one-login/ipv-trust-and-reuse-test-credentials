import { PostalAddressClass } from "@govuk-one-login/data-vocab/credentials";

export const ALICE_DOE_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "221C",
    streetName: "BAKER STREET",
    postalCode: "NW1 6XE",
    addressLocality: "LONDON",
    addressCountry: "GB",
    validFrom: "1980-01-02",
  });

export const ALICE_PARKER_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "80T",
    streetName: "YEOMAN WAY",
    postalCode: "BA14 0QP",
    addressLocality: "TROWBRIDGE",
    addressCountry: "GB",
    validFrom: "1952-01-01",
  });

export const ALICE_PARKER_NEW_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "27",
    streetName: "FOREST WAY",
    postalCode: "SM2 5TH",
    addressLocality: "SUTTON",
    addressCountry: "GB",
    validFrom: "2024-01-01",
  });

export const ALICE_PARKER_OLD_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "80T",
    streetName: "YEOMAN WAY",
    postalCode: "BA14 0QP",
    addressLocality: "TROWBRIDGE",
    addressCountry: "GB",
  });

export const BOB_PARKER_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "80T",
    streetName: "YEOMAN WAY",
    postalCode: "BA14 0QP",
    addressLocality: "TROWBRIDGE",
    addressCountry: "GB",
    validFrom: "1951-01-01",
  });

export const JAMES_MORIARTY_INVALID_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "111B",
    streetName: "BAKER STREET",
    postalCode: "NW1 1XE",
    addressLocality: "LONDON",
    addressCountry: "GB",
    validFrom: "1887-01-01",
  });

export const JOE_SCHMOE_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "122",
    streetName: "BURNS CRESCENT",
    postalCode: "EH1 9GP",
    addressLocality: "EDINBURGH",
    addressCountry: "GB",
    validFrom: "1995-01-02",
  });

export const KENNETH_DECERQUERIA_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "",
    buildingNumber: "8",
    streetName: "HADLEY ROAD",
    postalCode: "BA2 5AA",
    addressLocality: "BATH",
    addressCountry: "GB",
    validFrom: "2000-01-01",
  });

export const KENNETH_DECERQUERIA_JAPAN: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "2000",
    buildingNumber: "",
    streetName: "00",
    postalCode: "0",
    addressLocality: "0",
    addressRegion: "0",
    subBuildingName: "",
    addressCountry: "JP",
    validFrom: "2017-01-01",
  });

export const KENNETH_DECERQUERIA_OLD_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "",
    buildingNumber: "8",
    streetName: "HADLEY ROAD",
    postalCode: "BA2 5AA",
    addressLocality: "BATH",
    addressCountry: "GB",
  });

export const MARY_WATSON_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "221B",
    streetName: "BAKER STREET",
    postalCode: "NW1 6XE",
    addressLocality: "LONDON",
    addressCountry: "GB",
    validFrom: "1887-01-01",
  });

export const SAUL_GOODMAN_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "29",
    streetName: "CHURCH LANE",
    postalCode: "TN61 8PQ",
    addressLocality: "TUNBRIDGE WELLS",
    addressCountry: "GB",
    validFrom: "1996-01-01",
  });

export const CLAIRE_AARTS_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "1",
    streetName: "Hudswell Road",
    postalCode: "LS10 1AG",
    addressLocality: "Leeds",
    addressCountry: "GB",
    validFrom: "1996-01-01",
  });

export const KABIR_SINGH_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "1",
    streetName: "Hudswell Road",
    postalCode: "LS10 1AG",
    addressLocality: "Leeds",
    addressCountry: "GB",
    validFrom: "1996-01-01",
  });

export const NORA_PORTER_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "28",
    streetName: "Melmerby Close",
    postalCode: "NE3 5JA",
    addressLocality: "Newcastle upon Tyne",
    addressCountry: "GB",
    validFrom: "1996-01-01",
  });

export const TOM_HARDY_ADDRESS: PostalAddressClass =
  Object.freeze<PostalAddressClass>({
    buildingName: "34",
    streetName: "Diamond Street",
    postalCode: "NE28 8RL",
    addressLocality: "Wallsend",
    addressCountry: "GB",
    validFrom: "1996-01-01",
  });
