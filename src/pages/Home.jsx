import { useTranslation } from 'react-i18next'

export function Home() {
	const { t, i18n } = useTranslation()

	return (
		<>
			<h1>{t('homepage.titleMain')}</h1>
			<p>{t('homepage.descMain')}</p>
			<h2>{t('homepage.titleAbout')}</h2>
			<p>{t('homepage.descAbout')}</p>
			<h3>{t('homepage.titleServices')}</h3>
			<ul>
				<li>{t('homepage.listService1')}</li>
				<li>{t('homepage.listService2')}</li>
				<li>{t('homepage.listService3')}</li>
			</ul>
			<h4>{t('homepage.titleContact')}</h4>
			<p>{t('homepage.descContact')}</p>
			<p>Email: support@example.com</p>
			<p>Phone: (123) 456-7890</p>
			<button className='btn'>{t('homepage.btnLearnMore')}</button>
			<footer>
				<p>&copy; 2024 Your Company. {t('homepage.copyright')}</p>
				<nav className='footer-nav'>
					<a href='#privacy'>{t('homepage.linkPrivacy')}</a>
					<a href='#terms'>{t('homepage.linkTOS')}</a>
					<a href='#contact'>{t('homepage.linkContact')}</a>
				</nav>
			</footer>
		</>
	)
}
