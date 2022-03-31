import './App.css';
import './utils/firebase';
import {HashRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import Campaign from './pages/Campaign';
import Farishtey from './pages/Farishtey';
import EditCampaign from './pages/EditCampaign';

function App() {
  return (
    <div className="App">
			<Router>
				<div className="container-fluid  bg-light1" style={{"backgroundColor": "#e3f2fd"}}>
					<nav className="navbar navbar-expand-lg navbar-light container">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/campaign">Campaign</NavLink>
						<NavLink to="/farishtey">Farishtey</NavLink>
					</nav>
				</div>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/campaign' element={<Campaign/>} />
					<Route path='/campaign/:id' element={<EditCampaign/>} />
					<Route path='/farishtey' element={<Farishtey/>} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
