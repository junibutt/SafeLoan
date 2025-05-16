
import './App.css'
import Banner from './components/Banner'
import ContactSection from './components/ContactSection'
import FAQSection from './components/FAQSection'
import LoanModal from './components/LoanModal'
import LoanSection from './components/LoanSection'
import { ModalProvider } from './components/ModalContext'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <>
    <ModalProvider>
       <Toaster/>
      <Navbar/>
      <Banner/>
      <LoanSection/>
      <FAQSection/>
      <ContactSection/>
      <LoanModal/>
      </ModalProvider>
      
    </>
  )
}

export default App
