import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import store from './store'
import { Panel, SignIn, SignUp } from './pages'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/panel" component={Panel} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
