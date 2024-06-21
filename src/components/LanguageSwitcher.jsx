import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()

	const changeLanguage = (language) => {
		i18n.changeLanguage(language)
	}

	const handleLanguageChange = (e) => {
		changeLanguage(e.target.value)
	}

	return (
		<div className='language-switcher'>
			<select onChange={handleLanguageChange} defaultValue={i18n.language}>
				<option value='en'>English</option>
				<option value='de'>German</option>
			</select>
		</div>
	)
}
