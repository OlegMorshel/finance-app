import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Content from './Content'

const RoutesContentWrapper: React.FC = () => {
	const location = useLocation()
	const queryUrlString = location?.search.split('?')[1]

	const [queryParam, setQueryParam] = useState('')

	useEffect(() => {
		setQueryParam(queryUrlString)
	}, [location?.search])

	return <Content urlStringParam={queryParam} />
}

export default React.memo(RoutesContentWrapper)
