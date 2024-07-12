import Header from "./components/header/Header";
import Card from "./components/card/Card";
import cardData from "./data.js";
import "./reset.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Card data={cardData} />
      </main>
    </>
  );
}

export default App;
