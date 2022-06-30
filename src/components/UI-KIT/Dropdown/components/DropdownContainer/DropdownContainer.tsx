import classNames from 'classnames/bind'
import React from 'react'
import {ArrowDownSvg, CloseSvg} from '../../../../../assets/Icons'
import {DropdownItemType} from '../../Dropdown'
import styles from './DropdownContainer.module.scss'
const cnb = classNames.bind(styles)
interface Props {
	children?: React.ReactNode
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	isOpen: boolean
	selected: DropdownItemType[]
	setSelected: React.Dispatch<React.SetStateAction<DropdownItemType[]>>
}
const DropdownContainer: React.FC<Props> = ({children, setIsOpen, isOpen, selected, setSelected}) => {
	return (
		<div className={cnb('dropdownWrapper', {activeDropdownWrapper: isOpen, notEmptyWrapper: !!selected.length})}>
			<div className={cnb('selectedList')}>
				{selected.map((item) => (
					<h4 className={cnb('selectedItem')} key={item.id}>
						{item.label}
						<div className={cnb('cleanButton')} onClick={() => setSelected((prev) => [...prev.filter((el) => el.id !== item.id)])}>
							<CloseSvg />
						</div>
					</h4>
				))}
			</div>
			<div className={cnb(isOpen ? 'arrowOpenStyle' : 'arrowStyle')} onClick={() => setIsOpen((prev) => !prev)}>
				<ArrowDownSvg />
			</div>
			{children}
		</div>
	)
}
export default DropdownContainer
