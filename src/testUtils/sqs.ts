export const envelop = <
  T extends Record<string, unknown> = Record<string, unknown>
>(
  payload: T,
  overrides?: Partial<any>
): any => ({
  id: "7334491a-c128-41f7-9e92-c621737c5293",
  type: "...",
  source: "",
  specversion: "",
  data: payload,
  time: "2022-01-01T12:00:00Z",
  ...overrides,
});

export const createSQSEvent = <T = unknown>(...payloads: T[]): any => ({
  Records: payloads.map((payload) => ({
    body: JSON.stringify(payload),
    attributes: {
      ApproximateReceiveCount: "",
      SentTimestamp: "",
      SenderId: "",
      ApproximateFirstReceiveTimestamp: "",
    },
    awsRegion: "",
    eventSource: "",
    eventSourceARN: "",
    md5OfBody: "",
    messageAttributes: {},
    messageId: "",
    receiptHandle: "",
  })),
});
