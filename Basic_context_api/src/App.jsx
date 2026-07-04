import './App.css'
import Footer from './component/Footer'
import Home from './component/Home'
import Contextprov from './context/Contextprov'

function App() {

  return (
    <>
    <Contextprov>
    <div>its a context api basic</div>
    <Home />
    <Footer/>
    </Contextprov>
    </>
    )
}

export default App
