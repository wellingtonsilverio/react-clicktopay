import React, { useState } from "react";
import ClickToPayButton from "./components/ClickToPayButton";
import ClickToPayMark from "./components/ClickToPayMark";
import OPTInput from "./components/OPTInput";
import CardList from "./components/CardList";
import SingleCard from "./components/SingleCard";
import getCards from "./functions/getCards";
import idLookup from "./functions/idLookup";
import initiateValidation from "./functions/initiateValidation";
import validate from "./functions/validate";
import checkoutWithNewCard from "./functions/checkoutWithNewCard";
import encryptCard from "./functions/encryptCard";
import checkoutWithCard from "./functions/checkoutWithCard";
import signOut from "./functions/signOut";
import useLink from "./hooks/useLink";
import useScript from "./hooks/useScript";

export const Provider = ({
  srcDpaId,
  dpaLocale,
  dpaPresentationName,
  dpaName,
  cardBrands,
  debug,
  children
}) => {
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
            dpaPresentationName,
            dpaName
          },
          dpaTransactionOptions: { dpaLocale },
          cardBrands
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

  const ChildrenWithProps = (props) => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { clickToPay: props });
      }
      return child;
    });
  };

  return (
    <ChildrenWithProps
      getCards={() => getCards(instance)}
      idLookup={(email, PhoneNumber) => idLookup(instance, email, PhoneNumber)}
      initiateValidation={(requestedValidationChannelId) =>
        initiateValidation(instance, requestedValidationChannelId)
      }
      validate={(OTPvalue) => validate(instance, OTPvalue)}
      checkoutWithNewCard={(
        encryptedCard,
        cardBrand,
        consumer,
        windowRef,
        dpaTransactionOptions
      ) =>
        checkoutWithNewCard(
          instance,
          encryptedCard,
          cardBrand,
          consumer,
          windowRef,
          dpaTransactionOptions
        )
      }
      encryptCard={(
        primaryAccountNumber,
        panExpirationMonth,
        panExpirationYear,
        cardSecurityCode,
        cardholderFirstName,
        cardholderLastName,
        billingAddress
      ) =>
        encryptCard(
          instance,
          primaryAccountNumber,
          panExpirationMonth,
          panExpirationYear,
          cardSecurityCode,
          cardholderFirstName,
          cardholderLastName,
          billingAddress
        )
      }
      checkoutWithCard={(srcDigitalCardId, windowRef, DpaTransactionOptions) =>
        checkoutWithCard(
          instance,
          srcDigitalCardId,
          windowRef,
          DpaTransactionOptions
        )
      }
      signOut={() => signOut(instance)}
    />
  );
};

export default {
  Provider,
  ClickToPayButton,
  ClickToPayMark,
  OPTInput,
  CardList,
  SingleCard
};
