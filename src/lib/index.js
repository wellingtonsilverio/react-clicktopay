import React from "react";
import useScript from "./hooks/useScript";

export const Provider = ({ srcDpaId, dpaLocale, children }) => {
    const status = useScript(`https://src.mastercard.com/srci/integration/2/lib.js?srcDpaId=${srcDpaId}&locale=${dpaLocale}`);
    
    React.useEffect(() => {
        console.log("Hello ReactClickToPay");
    }, []);
    React.useEffect(() => {
        console.log("status", status);
    }, [status]);

    return <>{children}</>;
}

export default {
    Provider
}