import classNames from 'classnames/bind'
import React, {useState} from 'react'
import DropdownContainer from './components/DropdownContainer/DropdownContainer'
import DropdownItem from './components/DropdownItem/DropdownItem'
import DropdownList, { DropdownModeType } from './components/DropdownList/DropdownList'
import styles from './Dropdown.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	list: DropdownItemType[]
	selected: DropdownItemType[]
	setSelected: React.Dispatch<React.SetStateAction<DropdownItemType[]>>
	mode?: DropdownModeType
}

export interface DropdownItemType {
	id: string
	label: string
}
const Dropdown: React.FC<Props> = ({list, setSelected, selected, mode = 'single'}) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={cnb('dropdown')}>
			<DropdownContainer setIsOpen={setIsOpen} isOpen={isOpen} selected={selected} setSelected={setSelected} />
			{isOpen && <DropdownList list={list} setSelected={setSelected} mode={mode} />}
		</div>
	)
}
export default Dropdown
