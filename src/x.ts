import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

import bvSchema from "../schema/events/x.json";
import type { X } from "./generated/model/x";

const ajv = new Ajv({
  allowUnionTypes: true,
  verbose: true,
  allErrors: true,
});
addFormats(ajv);

const validateBV = ajv.compile<X>({ $async: true, ...bvSchema });

console.warn("test")

export default {}