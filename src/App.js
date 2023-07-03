import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/exercise/:id' element={<ExerciseDetail />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
