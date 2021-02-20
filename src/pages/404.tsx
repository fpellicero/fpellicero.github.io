import * as React from "react";
import Locales from "i18n/Locales";
import { useRouter } from "next/router";
import Loader from "components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Trans } from "@lingui/macro";
import { AnimatePresence, motion } from "framer-motion";
import { i18n } from '@lingui/core'


const NotFoundPage = () => {
    const [showError, setShowError] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        let preferredLocale = "en";
        for (const language of navigator.languages) {
            if (Locales.includes(language)) {
                preferredLocale = language;
                break;
            }
        }

        const currentPath = window.location.pathname;
        if (Locales.find((l) => currentPath.startsWith(`/${l}`))) {
            i18n.activate(preferredLocale);
            setShowError(true);
            return;
        }

        

        router.push(`/${preferredLocale}${currentPath}`);
    }, []);

    return (
        <AnimatePresence exitBeforeEnter={true}>
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

    );
}

export default NotFoundPage;
