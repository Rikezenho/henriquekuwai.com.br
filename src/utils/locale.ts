import { GetStaticPropsContext } from "next";

const getLocale = async (
  context: GetStaticPropsContext,
  namespaces: Array<string>
) => {
  const { locale } = context;

  const imports = await Promise.all(
    namespaces.map((namespace) => import(`../locale/${locale}/${namespace}`))
  );

  return imports.reduce((acc, curr) => ({ ...acc, ...curr }), {});
};

export { getLocale };
