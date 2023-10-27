import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import {BrowserRouter} from 'react-router-dom'

import { store } from './redux/store'
import { Provider } from 'react-redux'
import { fetchCarros } from './redux/slices/carroSlice'

store.dispatch(fetchCarros());
//store.dispatch(fetchFiltros());
//store.dispatch(fetchHorarios());

ReactDOM.createRoot(document.getElementById('root')).render(
  
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)