import App from './app'
import ReactDOM from 'react-dom'

const reactroot = document.querySelector('[data-reactroot].swagger-ui')
const container  = document.querySelector('#swagger-ui')

const sidebar = document.createElement('div')
sidebar.id='sidebar'
container?.insertBefore(sidebar,reactroot)
ReactDOM.render(App(),document.getElementById('sidebar'))
