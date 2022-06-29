import React from 'react'
interface Props {
	children?: React.ReactNode
	onClick: () => void
}
const DropdownContainer: React.FC<Props> = ({children, onClick}) => {
	return <div onClick={() => onClick()}>{children}</div>
}
export default DropdownContainer
