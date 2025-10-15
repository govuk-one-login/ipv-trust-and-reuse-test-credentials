import {
  AddressCredentialJWTClass,
  JWTClass,
  PostalAddressClass,
} from "@govuk-one-login/data-vocab/credentials";

export const createAddressCredential = (
  header: JWTClass,
  ...addresses: PostalAddressClass[]
): AddressCredentialJWTClass => {
  return {
    ...header,
    vc: {
      type: ["VerifiableCredential", "AddressCredential"],
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://vocab.account.gov.uk/contexts/identity-v1.jsonld",
      ],
      credentialSubject: {
        address: [...addresses],
      },
    },
  };
};
