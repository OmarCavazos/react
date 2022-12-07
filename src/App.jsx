import { Provider } from 'react-redux'
import { store } from './store/Index'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState("")

  return (
      <>
        <Provider store={store} >
          <Header/>
          <Main />
          <Footer />
        </Provider>
      </>
  )
}

export default App
