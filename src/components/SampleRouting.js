// Import components
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

const App = () => (
  <Router>

<div className="nav-bar">
  <Link to="/"> Home </Link>
  <Link to="/about"> About </Link>
  <Link to="/blog"> Blog </Link>
</div>

    <Routes>
      {/* Exact match to avoid 
          overriding other routes */}
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
    </Routes>
  </Router>
);