import { React, BrowserRouter as Router, Route } from './pages/perbendaharaan/libraries/dependencies';
import './App.css';

// @import pages
import Perbendaharaan from './pages/perbendaharaan';
import { BrowseDokumenPiutang, RekamDokumenPiutang } from './pages/perbendaharaan/dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Perbendaharaan} />
      <Route path="/Perekaman" component={RekamDokumenPiutang} />
    </Router>
  )
}

export default App;