import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import store from './store'
import { Navbar } from './components'
import { Panel, SignIn, SignUp, Create } from './pages'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/panel" component={Panel} />
          <Route path="/create" component={Create} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
