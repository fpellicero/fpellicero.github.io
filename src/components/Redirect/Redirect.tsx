import * as React from "react";
import Locales from "i18n/Locales";
import { useRouter } from "next/router";
import { i18n } from '@lingui/core'
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans } from "@lingui/macro";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "components/Loader/Loader";


interface IProps {
    to: string;
    locale?: string;
}

const Redirect: React.FC<IProps> = ({ locale }) => {
    const [showError, setShowError] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        let preferredLocale = getPreferredLocale(locale);

        const currentPath = window.location.pathname;
        if (Locales.find((l) => currentPath.startsWith(`/${l}`))) {
            i18n.activate(preferredLocale);
            setShowError(true);
            return;
        }

        router.push(`/${preferredLocale}${currentPath}`);
    }, []);

    return (

        <AnimatePresence exitBeforeEnter={true} initial={true}>
            <motion.div
                key={showError ? "error" : "loader"}
                className="error-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {!showError && (
                    <Loader />
                )}
                {showError && (
                    <>
                        <FontAwesomeIcon icon={faExclamationTriangle} size={"3x"} />
                        <div className="error-page__message">
                            <Trans>
                                Looks like this page does not exist yet.
                            </Trans>
                        </div>
                    </>
                )}
            </motion.div>

        </AnimatePresence>
    )
}

function getPreferredLocale(locale: string) {
    // Forced locale, just return
    if (locale) {
        return locale;
    }

    // See if user previously selected a locale
    const storedLocale = window.localStorage.getItem("locale");
    if (storedLocale && Locales.includes(storedLocale)) {
        return storedLocale;
    }

    // Try to infer from browser preferences
    let preferredLocale = "en";
    for (const language of navigator.languages) {
        if (Locales.includes(language)) {
            preferredLocale = language;
            break;
        }
    }

    return preferredLocale;
}

export default Redirect;
