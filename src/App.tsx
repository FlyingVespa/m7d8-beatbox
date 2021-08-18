import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MyNav from "./components/MyNav";
import TrackDetails from "./components/TrackDetails";
import ArtistDetails from "./components/ArtistDetails";
import Search from "./components/Search";

function App() {
  return (
    <>
      <MyNav />
      <Router>
        <Route path="/" component={Search} />
        <Route path="/track/:id" exact component={TrackDetails} />
        <Route path="/artist/:id" exact component={ArtistDetails} />
      </Router>
    </>
  );
}

export default App;
