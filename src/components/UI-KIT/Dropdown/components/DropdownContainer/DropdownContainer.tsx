import classNames from 'classnames/bind'
import React from 'react'
import {ArrowDownSvg} from '../../../../../assets/Icons'
import styles from './DropdownContainer.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	children?: React.ReactNode
	onClick: () => void
	isOpen: boolean
}
const DropdownContainer: React.FC<Props> = ({children, onClick, isOpen}) => {
	return (
		<div onClick={() => onClick()} className={cnb('dropdownWrapper', {activeDropdownWrapper: isOpen})}>
			<div className={cnb(isOpen ? 'arrowOpenStyle' : 'arrowStyle')}>
				<ArrowDownSvg />
			</div>
			{children}
		</div>
	)
}
export default DropdownContainer
