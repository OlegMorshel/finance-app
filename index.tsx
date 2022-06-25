import {createRoot} from 'react-dom/client'
import './src/styles/styles.scss'
import {BrowserRouter} from 'react-router-dom'
import RoutesContainer from './src/routing/Routes'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
	<BrowserRouter>
		<RoutesContainer />
	</BrowserRouter>
)
