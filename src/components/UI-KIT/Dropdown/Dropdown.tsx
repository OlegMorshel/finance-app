import classNames from 'classnames/bind'
import React, {useState} from 'react'
import DropdownContainer from './components/DropdownContainer/DropdownContainer'
import DropdownItem from './components/DropdownItem/DropdownItem'
import DropdownList from './components/DropdownList/DropdownList'
import styles from './Dropdown.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	list?: DropdownItemType[]
	selected?: DropdownItemType
	setSelected?: () => void
}

export interface DropdownItemType {
	id: string
	label: string
}
const Dropdown: React.FC<Props> = ({list}) => {
	const [state, setState] = useState()
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={cnb('dropdown')}>
			<DropdownContainer onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} />
			{isOpen && <DropdownList list={list} />}
		</div>
	)
}
export default Dropdown
