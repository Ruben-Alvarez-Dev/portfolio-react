import { Aside } from "./components/Aside/Aside"
import { Footer } from "./components/Footer/Footer"
import { Main } from "./components/Main/Main"
import { Navbar } from "./components/Navbar/Navbar"

export const App = () => {
  
  return (
    
    <div className="app">
      App
      
      <Navbar />
      <Aside />
      <Main />
      <Footer />
    </div>

  )
}