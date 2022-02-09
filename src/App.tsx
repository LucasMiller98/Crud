import { AppRoutes } from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './global/styles.css'

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App;
