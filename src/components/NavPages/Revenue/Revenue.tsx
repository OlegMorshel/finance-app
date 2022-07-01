import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './Revenue.module.scss'
import RevenueContent from './components/RevenueContent/RevenueContent'
import RevenueSettings from './components/RevenueSettings/RevenueSettings'
import Dropdown, {DropdownItemType} from '../../UI-KIT/Dropdown/Dropdown'
import TextEditor from '../../UI-KIT/TextEditor/TextEditor'
import Checkbox from '../../UI-KIT/Checkbox/Checkbox'
const cnb = classNames.bind(styles)
interface Props {}
const Revenue: React.FC<Props> = () => {
	const list = [
		{id: '1', label: 'text1'},
		{id: '2', label: 'text2'},
		{id: '3', label: 'text3'},
		{id: '4', label: 'text4'},
		{id: '5', label: 'text5'},
		{id: '6', label: 'text6'},
		{id: '7', label: 'text7'},
	]
	const [state, setState] = useState<DropdownItemType[]>([])
	const [isChecked, setIsChecked] = useState(false)
	return (
		<div className={cnb('revenueLayout')}>
			<RevenueContent />
			<RevenueSettings />
			<div>
				<Dropdown list={list} selected={state} setSelected={setState} mode={'multi'} />
				<TextEditor />
				<Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
			</div>
		</div>
	)
}
export default Revenue
