import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

import LanguageSwitcher from './LanguageSwitcher'
import { ModeToggler } from './ModeToggler'

export function Header() {
	return (
		<header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
			<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
				<NavLink
					to='/'
					className='flex items-center gap-2 text-lg font-semibold md:text-base'>
					<span>RCT</span>
				</NavLink>
				<NavLink
					to='/'
					className='text-foreground transition-colors hover:text-foreground'>
					Home
				</NavLink>
				<NavLink
					to='/todo'
					className='text-foreground transition-colors hover:text-foreground'>
					Todo
				</NavLink>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='shrink-0 md:hidden'>
						<Menu className='h-5 w-5' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<nav className='grid gap-6 text-lg font-medium'>
						<NavLink
							to='/'
							className='flex items-center gap-2 text-lg font-semibold'>
							<span>RCT</span>
						</NavLink>
						<NavLink to='/' className='hover:text-foreground'>
							Home
						</NavLink>
						<NavLink
							to='/todo'
							className='text-muted-foreground hover:text-foreground'>
							Todo
						</NavLink>
					</nav>
				</SheetContent>
			</Sheet>
			<div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
				<div className='ml-auto flex gap-2'>
					<ModeToggler />
					<LanguageSwitcher />
				</div>
			</div>
		</header>
	)
}
