import classNames from 'classnames/bind'
import React from 'react'
import {DropdownItemType} from '../../Dropdown'
import DropdownItem from '../DropdownItem/DropdownItem'
import styles from './DropdownList.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	list: DropdownItemType[]
	setSelected: React.Dispatch<React.SetStateAction<DropdownItemType[]>>
	mode: 'single' | 'multi'
}
const DropdownList: React.FC<Props> = ({setSelected, list, mode}) => {
	return (
		<div className={cnb('dropdownList')}>
			{list.map((item) => (
				<DropdownItem item={item} selectItem={setSelected} key={item.id} mode={mode} />
			))}
		</div>
	)
}
export default DropdownList
