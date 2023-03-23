import React, { useState } from "react";
import ClickToPayButton from "./components/ClickToPayButton";
import ClickToPayMark from "./components/ClickToPayMark";
import OPTInput from "./components/OPTInput";
import CardList from "./components/CardList";
import SingleCard from "./components/SingleCard";
import getCards from "./functions/getCards";
import useLink from "./hooks/useLink";
import useScript from "./hooks/useScript";

export const Provider = ({ srcDpaId, dpaLocale, debug, children }) => {
  const [instance, setInstance] = useState();
  const [click2PayStatus, click2PayLib] = useScript(
    debug
      ? `https://sandbox.src.mastercard.com/srci/integration/2/lib.js?srcDpaId=${srcDpaId}&locale=${dpaLocale}`
      : `https://src.mastercard.com/srci/integration/2/lib.js?srcDpaId=${srcDpaId}&locale=${dpaLocale}`,
    "Click2Pay"
  );
  useScript(
    `https://src.mastercard.com/srci/integration/components/src-ui-kit/src-ui-kit.esm.js`,
    "Click2PayUI",
    { type: "module" }
  );
  useLink(
    `https://src.mastercard.com/srci/integration/components/src-ui-kit/src-ui-kit.css`
  );

  React.useEffect(() => {
    async function initializeClick2Pay() {
      try {
        const { Click2Pay } = click2PayLib;
        const click2payInstance = new Click2Pay();
        setInstance(click2payInstance);

        const result = await click2payInstance.init({
          srcDpaId,
          dpaData: {
            dpaPresentationName: "Desenvolve",
            dpaName: "Desenvolve"
          },
          dpaTransactionOptions: { dpaLocale },
          cardBrands: ["mastercard", "visa", "amex", "discover"]
        });
        console.log("click2payInstance result", result);
      } catch (error) {
        console.log(error);
      }
    }

    if (click2PayStatus == "ready") {
      if (click2PayLib) {
        initializeClick2Pay();
      }
    }
  }, [click2PayStatus]);

  const ChildrenWithProps = (props) =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { clickToPay: props });
      }
      return child;
    });

  return <ChildrenWithProps getCards={() => getCards(instance)} />;
};

export default {
  Provider,
  ClickToPayButton,
  ClickToPayMark,
  OPTInput,
  CardList,
  SingleCard
};
