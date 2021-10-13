import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import WhatsNew from "./pages/new";
import GeneralTopics from "./pages/generalTopics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/whats-new">
          <WhatsNew />
        </Route>
        <Route path="/forums">
          <GeneralTopics />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
