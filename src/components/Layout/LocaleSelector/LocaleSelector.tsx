import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "i18n/LocaleProvider";
import { Router, useRouter } from "next/router";
import * as React from "react";
import { Dropdown } from "react-bulma-components";
import { CircleFlag } from "react-circle-flags";


const LocaleSelector: React.FC = () => {
    const [showSelector, setShowSelector] = React.useState(false);
    const currentLocale = useLocale();
    const router = useRouter();

    const changeLocale = (locale: string) => {
        router.push(router.asPath.replace(`/${currentLocale}`, `/${locale}`));
        setShowSelector(false);
    }

    let Flags = [
        <CircleFlag countryCode={"es"} onClick={() => changeLocale("es")} />,
        <CircleFlag countryCode={"gb"} onClick={() => changeLocale("en")}/>
    ]

    if (currentLocale === "en") {
        Flags = Flags.reverse();
    }
    return (
        <>       
            <button className="locale-selector" onClick={() => setShowSelector(!showSelector)}>
                <CircleFlag countryCode={currentLocale === "es" ? "es" : "gb"} />
            </button>
            <AnimatePresence>
                {showSelector && (
                    <>
                        <motion.div
                            className="locale-selector__dropdown"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            {Flags[0]}
                            <motion.div
                                initial={{y: "-100%"}}
                                animate={{y: "0%"}}
                                transition={{delay: .1}}
                            >
                                {Flags[1]}
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className="locale-selector__background"
                            onClick={() => setShowSelector(false)}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default LocaleSelector;
