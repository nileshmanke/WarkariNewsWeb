import Footer from "./components/Footer";
import Form from "./components/Form";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Icon from "./components/Icon";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import StickyIcon from "./components/Stickyicon";
import UserContextProvider from "./components/UserContextProvider";


function App() {
  return (
  
    
    <UserContextProvider>
        <Header/>
        
        <Slider2/>
        <Form/>
        
        {/* <Slider3/> */}
        {/* <Slider4/> */}
        <Hero/>
        
        {/* <StickyIcon/> */}
        <Footer/>
    
        </UserContextProvider>
        
    
  );
}

export default App;
