import ReactDOM from 'react-dom/client'
import App from './Routing.jsx'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import "./sass/main.scss"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
