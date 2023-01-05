import { build } from "esbuild";

const lambdas = ["bvreceiver"];

lambdas.forEach((lambda) => {
  const entryPoint = `src/${lambda}.ts`;

  build({
    entryPoints: [entryPoint],
    bundle: true,
    outdir: `dist/${lambda}`,
    platform: "node",
    target: "node16",
    tsconfig: "tsconfig.lambda.json",
    external: ["aws-sdk"],
    sourcemap: true,
    minify: true,
  });
});
