import React from 'react'
interface Props {
	children?: React.ReactNode
}
const DropdownList: React.FC<Props> = (children) => {
	return <>{children}</>
}
export default DropdownList
