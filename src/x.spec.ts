import type { X, A } from "./generated/model/x";
import { createSQSEvent, envelop } from "./testUtils/sqs";
import './x';

describe("lambda", () => {
    it("should", async () => {
        const givenEvent = createSQSEvent(envelop<X>(defaultBV));
        //console.warn(givenEvent);
    });
});

const defaultBV = {
    buildingDetails: [{name: "x"}] as [A]
};
