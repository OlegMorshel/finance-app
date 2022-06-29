import React, {useState} from 'react'
import DropdownContainer from './components/DropdownContainer/DropdownContainer'
import DropdownItem from './components/DropdownItem/DropdownItem'
import DropdownList from './components/DropdownList/DropdownList'
interface Props {
	list?: DropdownItemType[]
	selected?: DropdownItemType
	setSelected?: () => void
}

export interface DropdownItemType {
	id: string
	label: string
}
const Dropdown: React.FC<Props> = () => {
	const [state, setState] = useState()
	const [isOpen, setIsOpen] = useState(false)
	return (
		<DropdownContainer onClick={() => setIsOpen((prev) => !prev)}>
			{isOpen && (
				<DropdownList>
					<DropdownItem id='1' title='title' />
				</DropdownList>
			)}
		</DropdownContainer>
	)
}
export default Dropdown
