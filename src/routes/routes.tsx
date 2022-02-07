import {
  BrowserRouter as Router,
  Routes as RoutesReact, 
  Route } from 'react-router-dom'

export function Routes() {
  return (
    <Router>
      <RoutesReact>
        <Route path='/' />
      </RoutesReact>
    </Router>
  )
}