import React from 'react'
import ReactDOM from 'react-dom'
import Arists from './components/artists'
import store from './stores/artists_store'

ReactDOM.render(
    <div>
        index react
    <Arists store={store} />
</div>, document.querySelector('.container'))
