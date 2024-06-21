import { useTranslation } from 'react-i18next'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()

	const changeLanguage = (language) => {
		i18n.changeLanguage(language)
	}

	const handleLanguageChange = (value) => {
		changeLanguage(value)
	}

	return (
		<Select onValueChange={handleLanguageChange}>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Language' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='en'>English</SelectItem>
				<SelectItem value='de'>German</SelectItem>
			</SelectContent>
		</Select>
	)
}
