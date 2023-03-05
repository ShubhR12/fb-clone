import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css"
import RightSidebar from "./components/RightSidebar";
import Login from "./components/Login";
import { useStateValue } from "./Stateprovider";
import Event from "./sidebarcomponents/Event";








function App() {
  const [{user},dispatch]=useStateValue();


  console.log(user)
  return (
  <>{ !user? (<Login/>):( <div className="App">
  <Header/>
  <div className="app-body">
    <Sidebar /> 
    <Feed/>
    <RightSidebar/>
    


  </div>
  <Event/>



</div>

  )}
  
   
    </>
    
  );
}

export default App;
