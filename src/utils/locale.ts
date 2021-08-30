import { GetStaticPropsContext } from "next";
import { Locale } from "../types/locale";
import { localeToToggle as ptBrLocale } from "../locale/pt-BR/localeToToggle";
import { localeToToggle as enUsLocale } from "../locale/en-US/localeToToggle";

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

const getLocaleToToggle = (localeCode?: string): Locale => {
  if (localeCode === ptBrLocale.locale) {
    return enUsLocale;
  }
  return ptBrLocale;
};

export { getLocale, getLocaleToToggle };
