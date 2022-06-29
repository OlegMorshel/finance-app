import React from 'react'
interface Props {
	title: string
	id: string
}
const DropdownItem: React.FC<Props> = ({id, title}) => {
	return <>{title}</>
}
export default DropdownItem
