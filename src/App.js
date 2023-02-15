import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AboutPage, ErrorPage, HomePage, FavoritesPage, Private, Recipes, SingleRecipePage} from './pages';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route exact path='/about'>
          <AboutPage/>
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage/>
        </Route>
        <Route exact path='/recipes'>
          <Recipes/>
        </Route>
        <Route exact path='/recipes/:id'>
          <SingleRecipePage/>
        </Route>
        <Route exact path='/private'>
          <Private/>
        </Route>
        <Route exact path='*'>
          <ErrorPage/>
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
