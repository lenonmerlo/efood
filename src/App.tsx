import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'
import Header from './components/Header'
import RestaurantPage from './pages/RestaurantPage'
import { GlobalCss } from './styles'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
