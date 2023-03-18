import React from "react";
import useScript from "./hooks/useScript";

export const Provider = ({ srcDpaId, dpaLocale, children }) => {
    const {status, lib} = useScript(`https://sandbox.src.mastercard.com/srci/integration/2/lib.js?srcDpaId=${srcDpaId}&locale=${dpaLocale}`, 'click2pay');

    React.useEffect(() => {
        if (status == "ready") {
            const click2payInstance = new lib();
            console.log({lib, click2payInstance});
        }
    }, [status]);

    return <>{children}</>;
}

export default {
    Provider
}