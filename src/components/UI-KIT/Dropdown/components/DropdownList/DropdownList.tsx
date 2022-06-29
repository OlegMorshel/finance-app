import classNames from 'classnames/bind'
import React from 'react'
import {DropdownItemType} from '../../Dropdown'
import DropdownItem from '../DropdownItem/DropdownItem'
import styles from './DropdownList.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	list?: DropdownItemType[]
}
const DropdownList: React.FC<Props> = (list) => {
	return (
		<div className={cnb('dropdownList')}>
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
			<DropdownItem item={{id: '1', label: 'title'}} />
		</div>
	)
}
export default DropdownList
