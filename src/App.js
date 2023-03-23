import ClickToPayButton from "./lib/components/ClickToPayButton";
import ClickToPayMark from "./lib/components/ClickToPayMark";
import OPTInput from "./lib/components/OPTInput";
import CardList from "./lib/components/CardList";
import SingleCard from "./lib/components/SingleCard";

import "./App.css";

function App({ clickToPay }) {
  clickToPay.getCards().then((a) => console.log("GET CARD", a));
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Click To Pay</h1>
      </header>
      <section>
        <h3>Click To Pay Button</h3>
        <ClickToPayButton />
      </section>

      <section>
        <h3>Click To Pay Mark</h3>
        <ClickToPayMark />
      </section>

      <section>
        <h3>OPT Input</h3>
        <OPTInput />
      </section>

      <section>
        <h3>Card List</h3>
        <CardList />
      </section>

      <section>
        <h3>Single Card</h3>
        <SingleCard />
      </section>
    </div>
  );
}

export default App;
