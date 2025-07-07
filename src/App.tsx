import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './sections/Footer/Footer'
import { FooterData } from './data/FooterData'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import HandleLoadingComponent from './components/HandleLoadingComponent/HandleLoadingComponent'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SocailBtn from './components/SocailBtn/SocailBtn'
import type { RootState } from './redux/store';
function App() {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <>
    
    <div className="min-h-screen bg-white  text-black01 dark:bg-darkNavy dark:text-white px-[8.2051%] md:px-[3.8369%] lg:px-[7.7777%] font-inter">
      <HandleLoadingComponent />
      <NavBar />
      <Outlet />
      <Footer year='© 2023' links={FooterData}/>
      <ScrollToTop />
      <SocailBtn />
    </div>
    </>
    
  )
}

export default App
