import { NavLink, Route, Routes } from 'react-router-dom'
import { TodoPage } from './pages/Todo'
import { Home } from './pages/Home'
import './styles.css'

export default function App() {
	return (
		<>
			<header>
				<nav class='navbar'>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/todo'>Todo</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/todo' element={<TodoPage />} />
				</Routes>
			</main>
		</>
	)
}
