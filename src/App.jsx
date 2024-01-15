import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

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

      
    </>
  )
}

export default App
