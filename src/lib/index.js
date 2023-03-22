import React, { useState } from "react";
import useLink from "./hooks/useLink";
import useScript from "./hooks/useScript";

export const Provider = ({ srcDpaId, dpaLocale, children }) => {
    const [ instance, setInstance ] = useState();
    const [ click2PayStatus, click2PayLib ] = useScript(`https://sandbox.src.mastercard.com/srci/integration/2/lib.js?srcDpaId=${srcDpaId}&locale=${dpaLocale}`, 'Click2Pay');
    const [ click2PayUIStatus, click2PayUILib ] = useScript(`https://src.mastercard.com/srci/integration/components/src-ui-kit/src-ui-kit.esm.js`, 'Click2Pay', {type: "module"});
    const [ UIKitStatus ] = useLink(`https://src.mastercard.com/srci/integration/components/src-ui-kit/src-ui-kit.css`, 'Click2Pay');

    React.useEffect(() => {
        if (click2PayStatus == "ready") {
            if (click2PayLib) {
                async function initializeClick2Pay() {
                    try {
                        const { Click2Pay } = click2PayLib;
                        const click2payInstance = new Click2Pay();
                        setInstance(click2payInstance);

                        const result = await click2payInstance.init({ srcDpaId, dpaData: { dpaPresentationName: "Desenvolve", dpaName: "Desenvolve" }, dpaTransactionOptions: { dpaLocale, }, cardBrands: ["mastercard", "visa", "amex", "discover"] })
                        console.log("click2payInstance result", result);
                    } catch (error) {
                        // handle error
                        console.log(error)
                    }
                }

                initializeClick2Pay();
            }
        }
    }, [click2PayStatus]);

    async function getCards() {
        if (!instance) return;
        return await instance.getCards();
    }


    const ChildrenWithProps = (props) => React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...props });
        }
        return child;
      });
    
    return <>
        <ClickToPayButton />
        <ClickToPayMark />
        <CardList />
        <SingleCard />
        <ChildrenWithProps getCards={getCards} />
    </>;
}

function ClickToPayButton(props) {
    return (<src-button {...props}></src-button>);
}
function ClickToPayMark(props) {
    return (<src-mark {...props}></src-mark>);
}
function OPTInput(props) {
    return (<src-otp-input {...props}></src-otp-input>);
}
function OTPChannelSelection(props) {
    // TODO
    return;
}
function CardList(props) {
    return (<src-card-list {...props}></src-card-list>);
}
function SingleCard(props) {
    return (<src-card {...props}></src-card>);
}

export default {
    Provider,
    ClickToPayButton,
    ClickToPayMark,
    OPTInput,
    CardList,
    SingleCard,
}