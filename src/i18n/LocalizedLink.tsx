import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useLocale } from "./LocaleProvider";
import { DefaultLocale } from "./Locales";

interface IProps extends React.PropsWithChildren<LinkProps> {
    locale?: string;
}

const LocalizedLink = ({locale, href, ...props}: IProps) => {
    const currentLocale = useLocale();
    const localeToUse = locale || currentLocale;

    return (
        <Link href={`/${localeToUse}${href}`} {...props}/>
    )
}

export default LocalizedLink;
