import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import {Anchor} from './Anchor'
import State from './tutorial/1-useState/setup/5-useState-counter'
import Effect from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'
import Condition from './tutorial/3-conditional-rendering/setup/3-show-hide'
import Forms from './tutorial/4-forms/setup/2-multiple-inputs'
import Ref from './tutorial/5-useRef/setup/1-useRef-basics'
import Reducer from './tutorial/6-useReducer/setup'
import Drilling from './tutorial/7-prop-drilling/setup/1-prop-drilling'
import Context from './tutorial/7-prop-drilling/setup/1-prop-drilling'
import Custom from './tutorial/9-custom-hooks/setup/1-fetch-example'
import Props from './tutorial/10-prop-types/setup/index'
import Memo from './tutorial/12-memo-useMemo-useCallback/setup'
// import RouterPage from './tutorial/11-react-router/setup'
function App() {
  return (
    <>
        <Router>
      <div className='container'>
          <Navbar/>
          <Switch>
            <Route exact path={'/state'}>
              <State/>
            </Route>
            <Route path={'/useEffect'}>
              <Effect/>
            </Route>
            <Route path={'/conditions'}>
              <Condition/>
            </Route>
            <Route path={'/forms'}>
              <Forms/>
            </Route>
            <Route path={'/ref'}>
              <Ref/>
            </Route>
            <Route path={'/reducer'}>
              <Reducer/>
            </Route>
            <Route path={'/drilling'}>
              <Drilling/>
            </Route>
            <Route path={'/context'}>
              <Context/>
            </Route>
            <Route path={'/custom'}>
              <Custom/>
            </Route>
            <Route path={'/props'}>
              <Props/>
            </Route>
            <Route path={'/memo'}>
              <Memo/>
            </Route>
          </Switch>
      </div>
    <Anchor/>
        </Router>
    </>
  );
}

export default App
