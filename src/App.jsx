import { NavLink, Route, Routes } from 'react-router-dom'
import { TodoPage } from './pages/Todo'
import { Home } from './pages/Home'
import './styles.css'
import LanguageSwitcher from './components/LanguageSwitcher'

export default function App() {
	return (
		<>
			<header>
				<nav className='navbar'>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/todo'>Todo</NavLink>
						</li>
						<LanguageSwitcher />
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
