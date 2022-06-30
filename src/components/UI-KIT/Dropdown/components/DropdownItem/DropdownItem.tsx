import classNames from 'classnames/bind'
import React from 'react'
import {DropdownItemType} from '../../Dropdown'
import styles from './DropdownItem.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	item: DropdownItemType
	selectItem: React.Dispatch<React.SetStateAction<DropdownItemType[]>>
	mode: 'single' | 'multi'
}
const DropdownItem: React.FC<Props> = ({item, selectItem, mode}) => {
	const handleSelect = (type: 'single' | 'multi') => {
		if (type === 'multi') return selectItem((prev) => [...prev.filter((prev) => prev.id !== item.id), item])
		return selectItem([item])
	}

	return (
		<div className={cnb('dropdownItem')} onClick={() => handleSelect(mode)}>
			{item.label}
		</div>
	)
}
export default DropdownItem