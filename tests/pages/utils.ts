import dayjs from "dayjs";

export async function setCookieVals() {
  const cookies = [
    {
      name: "CFC",
      value: "AQABCAFlF_1lS0MgWQS2&s=AQAAAF1jmBH6&g=ZRauUA",
      path: "/",
      domain: ".consent.yahoo.com",
    },
    {
      name: "A3",
      value:
        "d=AQABBEauFmUCED_fJGp9K8XWlpggH98khrQFEgABCAH1F2VKZeElb2UB9qMAAAcIPqwWZXbKbPI&S=AQAAAv8XxPkryFru4VvR1rUo8d4",
      path: "/",
      domain: ".yahoo.com",
    },
    {
      name: "A1",
      value:
        "d=AQABBEauFmUCED_fJGp9K8XWlpggH98khrQFEgABCAH1F2VKZeElb2UB9qMAAAcIPqwWZXbKbPI&S=AQAAAv8XxPkryFru4VvR1rUo8d4",
      path: "/",
      domain: ".yahoo.com",
    },
    {
      name: "GUC",
      value: "AQABCAFlF_VlSkIgWQS2&s=AQAAAE3fPG7w&g=ZRauUA",
      path: "/",
      domain: ".yahoo.com",
    },
    {
      name: "GUCS",
      value: "ATQTe9c8",
      path: "/",
      domain: ".yahoo.com",
    },
    {
      name: "A1S",
      value:
        "d=AQABBEauFmUCED_fJGp9K8XWlpggH98khrQFEgABCAH1F2VKZeElb2UB9qMAAAcIPqwWZXbKbPI&S=AQAAAv8XxPkryFru4VvR1rUo8d4",
      path: "/",
      domain: ".yahoo.com",
    },
    {
      name: "cmp",
      value: "t=1695985094&j=1&u=1---&v=96",
      path: "/",
      domain: ".yahoo.com",
    },
    {
      name: "EuConsent",
      value:
        "CPy3MMAPy3MMAAOACBETDYCoAP_AAEfAACiQgoNB9G7WTXNncXp_YPs0eYUX1VBp4uAxBgCBA-ABzBsUIIwGVmEzJEyIJigCGAIAoGJBIEFtGAlAQFAQIIAFABHICEEAJBAAIGAAECAAAgBACBBIEwAAAAAQoUBXMhQgkAdEQFoIQchAlgAgAQIAICAEoIhBAgQAEAAgQABICEAIgigAggAAAAIAAAAEAFAIEQBABgECB____eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQTFABINSogCbAgJCaQMIoEAIgqCACgUAAAAECBAAAmDAoQRgEqMBEAIEQABAAAAABQEACAAACABCAAIAgAQAAACAQAAAAQCAAAEAAAAAAAAAAAAAQAgAAAAAAQgCIQAhBAACAACAAgoAAIABAAAAAAEAIARCAAAAAAABAAAAAAIAQBAABAAAAAAQAAAAAAAAQIACADAAADgkbLUAMNABgACIKAiADAAEQUBUAGAAIgoA",
      path: "/",
      domain: ".yahoo.com",
    },
  ];
  return cookies;
}

export function toDate(unixTimestamp) {
  const date = dayjs.unix(unixTimestamp).format("MM/DD/YYYY");
  return date;
}
