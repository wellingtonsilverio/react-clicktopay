# ClickToPay for React

```bash
npm install --save react-clicktopay
```

```js
import ReactClickToPay from 'react-clicktopay';

function App() {
    return <ReactClickToPay.Provider srcDpaId={srcDpaId} dpaLocale={dpaLocale} debug><App /></ReactClickToPay.Provider>
}

export default App;
```
debug: use sandbox.src.mastercard.com

# Methods

Get Cards
```js
props.clickToPay.getCards();
```

# UI

Click to Pay Button
```js
<ClickToPayButton />
```

Click to Pay Mark
```js
<ClickToPayMark />
```

OTP Input
```js
<OPTInput />
```

Card List
```js
<CardList />
```

Single Card
```js
<SingleCard />
```