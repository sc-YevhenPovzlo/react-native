import './App.css';
import { Route,BrowserRouter,  Router,  Link, Routes } from "react-router-dom"
import Article from './Article'
import NoPage from './NoPage';

function App() {
  return (
    <BrowserRouter>
          <div>Test</div>
         <Link to="/page1">PAGE1</Link>
         <br/>
        {/* <Link to="/page2">PAGE2</Link>  */}
        <Link to="/Products/qa-l1-relays/qa-l2-high-voltage-dc-contactor-relays/qa-l3/qa-l4-sensing-resistors">PAGE2</Link> 
        <br/>
        <Link to="/NonExistingPage">NonExistingPage</Link> 
        <Routes>
          <Route path="page1" element={<Article />} />
          <Route  path="Products/qa-l1-relays/qa-l2-high-voltage-dc-contactor-relays/qa-l3/qa-l4-sensing-resistors" element={<Article />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
        </BrowserRouter>


  );
}

export default App;
