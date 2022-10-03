import "./App.css";
import { Expenses } from "./components/Expenses.js";

function App() {
  let expense = [
    {
      id: "e1",
      title: "School fee",
      amount: "300",
      date: "2nd oct 2022",
    },
    {
      id: "e2",
      title: "Books",
      amount: "200",
      date: "4th oct 2022",
    },
    {
      id: "e3",
      title: "NoteBooks",
      amount: "100",
      date: "1st oct 2022",
    },
    {
      id: "e4",
      title: "House Rent",
      amount: "700",
      date: "7th oct 2022",
    },
  ]; // make array of objects

  return (
    <div className="app-container">
      <div>
        <h2>Let's get Started</h2>
        <Expenses expense={expense}></Expenses>
      </div>
    </div>
  );
} // components returns JSX -> js + html -0> write html in js

export default App;
