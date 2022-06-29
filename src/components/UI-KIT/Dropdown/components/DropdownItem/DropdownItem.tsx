import classNames from 'classnames/bind'
import React from 'react'
import {DropdownItemType} from '../../Dropdown'
import styles from './DropdownItem.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	item: DropdownItemType
}
const DropdownItem: React.FC<Props> = ({item}) => {
	return <div className={cnb('dropdownItem')}>{item.label}</div>
}
export default DropdownItem
