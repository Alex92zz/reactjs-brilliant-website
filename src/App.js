import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import Contact from './ContactPage/Contact'
import BlogPage from './BlogPage/BlogPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
