import { mount } from 'svelte'
import './app.css'
import '../node_modules/mie-ds-core/styles/styles.scss'
import '../node_modules/mie-ds-brand-bluehive-light/styles/styles.scss'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
