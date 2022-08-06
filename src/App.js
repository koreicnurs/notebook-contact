import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => (
    <BrowserRouter>
      <Switch>
        {/*<Route path="/" exact component={}/>*/}
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </BrowserRouter>
);

export default App;
