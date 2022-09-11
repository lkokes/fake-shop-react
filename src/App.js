import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing}></Route>
          <Route exact path='/product/:productId' component={ProductDetail}></Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>         
    </div>
  );
}

export default App;
