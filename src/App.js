import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import Widgets from './components/Widgets';
import Home from './components/Home';
import CurrentPost from './components/CurrentPost';
import Tweets from './components/Tweets';

function App() {
  return (
    <div className='app'>
      <SideBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/post/:id' component={CurrentPost} />
          <Route path='/tweets/:id' component={Tweets} />
        </Switch>
      </BrowserRouter>
      <Widgets />
    </div>
  );
}

export default App;
