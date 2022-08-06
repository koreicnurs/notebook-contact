import Contacts from "./containers/Contacts/Contacts";
import {Route, Switch} from "react-router-dom";
import NewContact from "./containers/NewContact/NewContact";

const App = () => (
      <Switch>
        <Route path="/" exact component={Contacts}/>
        <Route path="/new" exact component={NewContact}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
);

export default App;
