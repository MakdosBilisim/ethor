let requireAll;
(async (): Promise<void> => {
  // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
  const requireGlob = require("require-glob");
  requireAll = await requireGlob("../services/**/index.ts");
})();

// console.log(requireAll);
