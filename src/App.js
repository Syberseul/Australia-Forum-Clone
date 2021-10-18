import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

// Components
import Header from "./components/header";

// Pages
import Home from "./pages/home";
import WhatsNew from "./pages/new";
import GeneralTopics from "./pages/generalTopics";
import Register from "./pages/Register";
import Account from "./pages/account";

// CSS file
import "./App.css";

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
