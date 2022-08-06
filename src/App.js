import Contacts from "./containers/Contacts/Contacts";
import {Route, Switch} from "react-router-dom";

const App = () => (
      <Switch>
        <Route path="/" exact component={Contacts}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
);

export default App;
