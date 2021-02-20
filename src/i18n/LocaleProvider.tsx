import * as React from "react";

const LocaleContext = React.createContext<string>("en");

const LocaleProvider = LocaleContext.Provider;

export function useLocale() {
    const locale = React.useContext(LocaleContext);
    return locale;
}

export default LocaleProvider;