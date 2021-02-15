import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import * as React from "react";

const GA_TRACKING_ID = "UA-150757427-1";

export const usePageviewTracking = () => {
    const router = useRouter();
    
    /* Track page_views */
    React.useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag('config', GA_TRACKING_ID, {
                page_path: url,
            });
        }
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        }
    }, [router.events]);
}

const initialScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}', {
    page_path: window.location.pathname,
});
`;
export const GtagGlobalScript: React.FC = () => (
    <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        <script dangerouslySetInnerHTML={{__html: initialScript}}></script>
    </>
);
