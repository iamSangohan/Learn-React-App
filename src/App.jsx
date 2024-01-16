import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Recherche from './components/Recherche'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <ContenuPage />
    </div>    
  )
}

function ContenuPage() {
  return (
    <>
      <Carousel />

      <Recherche />
    </>
  )
}

export default App
