import './assets/styles/App.css'
import Header from './assets/components/Header/Header.tsx'
import Footer from './assets/components/Footer/Footer.tsx'
import Main from './assets/components/Main/Main.tsx'

function App() {

  return (
    <div className='app'>
            <Header/>
            <Main/>
            <Footer/>
    </div>
  )
}

export default App
