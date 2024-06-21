import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export function Home() {
	const { t, i18n } = useTranslation()

	return (
		<>
			<h1 className='scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl'>
				{t('homepage.titleMain')}
			</h1>
			<p className='leading-7'>{t('homepage.descMain')}</p>
			<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-5'>
				{t('homepage.titleAbout')}
			</h2>
			<p className='leading-7'>{t('homepage.descAbout')}</p>
			<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-5'>
				{t('homepage.titleServices')}
			</h2>
			<ul className='ml-6 list-disc [&>li]:mt-2'>
				<li>{t('homepage.listService1')}</li>
				<li>{t('homepage.listService2')}</li>
				<li>{t('homepage.listService3')}</li>
			</ul>
			<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-5'>
				{t('homepage.titleContact')}
			</h2>
			<p className='leading-7'>{t('homepage.descContact')}</p>
			<p>
				Email:{' '}
				<span className='text-muted-foreground'>support@example.com</span>
			</p>
			<p>
				Phone: <span className='text-muted-foreground'>(123) 456-7890</span>
			</p>
			<Button className='mt-2 mb-6'>{t('homepage.btnLearnMore')}</Button>
			<footer className='border-t pt-3'>
				<p className='leading-7'>&copy; 2024 RCT. {t('homepage.copyright')}</p>
				<nav className='flex gap-4'>
					<a href='#privacy'>{t('homepage.linkPrivacy')}</a>
					<a href='#terms'>{t('homepage.linkTOS')}</a>
					<a href='#contact'>{t('homepage.linkContact')}</a>
				</nav>
			</footer>
		</>
	)
}
