import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DroneList, DroneReports } from './pages'
import { Footer } from './components'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <DroneList />
        </Route>
        <Route exact path='/:id' children={<DroneReports />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
