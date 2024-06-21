// Library components
import { Route, Routes } from 'react-router-dom'

// Custom Components
import { Header } from './components/Header'
import { ThemeProvider } from './components/ThemeProvider'

// Pages
import { TodoPage } from './pages/Todo'
import { Home } from './pages/Home'

// CSS
import './styles.css'

export default function App() {
	return (
		<ThemeProvider>
			<div className='flex min-h-screen w-full flex-col'>
				<Header />
				<main className='p-4 md:p-8 mx-auto max-w-5xl'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/todo' element={<TodoPage />} />
					</Routes>
				</main>
			</div>
		</ThemeProvider>
	)
}
