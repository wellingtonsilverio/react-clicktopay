# ClickToPay for React

```bash
npm install --save react-clicktopay
```

```js
import ReactClickToPay from "react-clicktopay";

function App() {
  const providerProps = {
    srcDpaId: "",
    dpaLocale: "pt-BR",
    dpaPresentationName: "",
    dpaName: "",
    cardBrands: ["mastercard", "visa", "amex", "discover"]
  };

  return (
    <ReactClickToPay.Provider debug {...providerProps}>
      <App />
    </ReactClickToPay.Provider>
  );
}

export default App;
```

> debug: use sandbox.src.mastercard.com

> !debug: use src.mastercard.com

# Methods

Get Cards

```js
props.clickToPay.getCards();
```

Identity Lookup

```js
props.clickToPay.idLookup({
  email: "test@user.com",
  mobileNumber: {
    countryCode: 1,
    phoneNumber: 2222222222
  }
});
```

Initiate Identity Validation

```js
props.clickToPay.initiateValidation({
  requestedValidationChannelId: "EMAIL"
});
```

Complete Identity Validation

```js
props.clickToPay.validate("946304");
```

Check Out With New Card

```js
props.clickToPay.checkoutWithNewCard({
  windowRef: windowRef,
  encryptedCard: "eyJraWQiOiIxM...",
  cardBrand: "mastercard",
  consumer: {
    emailAddress: "test.user@test.com",
    mobileNumber: {
      phoneNumber: "3470000000",
      countryCode: "1"
    },
    firstName: "Test",
    lastName: "User"
  },
  dpaTransactionOptions: {
    transactionAmount: {
      transactionAmount: 100,
      transactionCurrencyCode: "USD"
    },
    dpaBillingPreference: "FULL",
    dpaAcceptedBillingCountries: [],
    dpaAcceptedShippingCountries: [],
    consumerEmailAddressRequested: true,
    consumerPhoneNumberRequested: true,
    merchantCategoryCode: "0000",
    merchantCountryCode: "US",
    merchantOrderId: "506610rt-6858-4147-9ec2-b030f1337a7d",
    threeDsPreference: "NONE",
    dpaLocale: "en_US",
    paymentOptions: [
      {
        dynamicDataType: "CARD_APPLICATION_CRYPTOGRAM_SHORT_FORM"
      }
    ]
  }
});
```

Encrypt Card

```js
props.clickToPay.encryptCard({
  primaryAccountNumber: "5204731600012796",
  panExpirationMonth: "11",
  panExpirationYear: "25",
  cardSecurityCode: "123",
  cardholderFirstName: "Jane",
  cardholderLastName: "Doe",
  billingAddress: {
    name: "Jane Doe",
    line1: "Street 1",
    line2: "string",
    line3: "string",
    city: "New York",
    state: "NY",
    zip: "10009",
    countryCode: "US"
  }
});
```

Check Out With Card

```js
props.clickToPay.checkoutWithCard({
  srcDigitalCardId: "361a8d27-0b74-413d-a318-db5dc568e908",
  windowRef: "Window",
  dpaTransactionOptions: {
    transactionAmount: {
      transactionAmount: 100,
      transactionCurrencyCode: "USD"
    },
    dpaBillingPreference: "FULL",
    dpaAcceptedBillingCountries: [],
    dpaAcceptedShippingCountries: [],
    consumerEmailAddressRequested: true,
    consumerPhoneNumberRequested: true,
    merchantCategoryCode: "0000",
    merchantCountryCode: "US",
    merchantOrderId: "506610rt-6858-4147-9ec2-b030f1337a7d",
    threeDsPreference: "NONE",
    dpaLocale: "en_US",
    paymentOptions: [
      {
        dynamicDataType: "CARD_APPLICATION_CRYPTOGRAM_SHORT_FORM"
      }
    ]
  }
});
```

Sign Out

```js
props.clickToPay.signOut();
```

# UI

Click to Pay Button

```js
import { ClickToPayButton } from "react-clicktopay";

<ClickToPayButton />;
```

Click to Pay Mark

```js
import { ClickToPayMark } from "react-clicktopay";

<ClickToPayMark />;
```

OTP Input

```js
import { OPTInput } from "react-clicktopay";

<OPTInput />;
```

OTPChannelSelection

```js
import { OTPChannelSelection } from "react-clicktopay";

<OTPChannelSelection />;
```

Card List

```js
import { CardList } from "react-clicktopay";

<CardList />;
```

Single Card

```js
import { SingleCard } from "react-clicktopay";

<SingleCard />;
```
