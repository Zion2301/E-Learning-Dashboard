import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Barchart from './components/Barchart'
import Piechart from './components/Piechart'
function App() {

  return (
    <>
    <div className="totaldiv">
    <div className="leftdiv">
      <Sidebar/>
      </div>

      <div className="rightside">
         <Navbar/>
         <div className="barandpie">
            <div className="bar-div"><Barchart/></div>
            <div className="pie-div"><Piechart/></div>
         </div>
      </div>
    </div>
    </>
  )
}

export default App
