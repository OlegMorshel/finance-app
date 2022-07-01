import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './Checkbox.module.scss'
import {animated, useSpring} from 'react-spring'
import {CheckboxIconSvg} from '../../../assets/Icons'
const cnb = classNames.bind(styles)
interface Props {
	label?: string
	isChecked: boolean
	setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}
const Checkbox: React.FC<Props> = ({label, isChecked, setIsChecked}) => {
	return (
		<label className={cnb('checkboxLabel')}>
			<input
				type='checkbox'
				onChange={() => {
					setIsChecked(!isChecked)
				}}
			/>
			<span className={cnb('checkbox', {checkbox__active: isChecked})} aria-hidden='true' />
			{isChecked && (
				<span className={cnb('checkboxIcon')}>
					<CheckboxIconSvg />
				</span>
			)}
			{label}
		</label>
	)
}
export default Checkbox
