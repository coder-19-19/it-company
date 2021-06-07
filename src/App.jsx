import MainContext from './MainContext';
import { useState,useEffect, Component} from 'react';
import HeaderComponent from './components/HeaderComponent';
import SiteComponent from './components/SiteComponent';
import WorkerComponent from './components/WorkerComponent';
import Footer from './components/Footer';
import Manat from './img/manat.png';
import Credit from './img/credit.png';
import Cost from './img/cost.png';
import Worker from './img/worker.png';
import Calendar from './img/calendar.png';
import Frontend from './img/frontend.png';
import Backend from './img/backend.png';
import Fullstack from './img/fullstack.png';
import Info from './img/information.png';
import Trophy from './img/trophy.png';

function App() {


  const [cash,setCash] = useState(0)
  const [credit,setCredit] = useState(0)
  const [cost,setCost] = useState(0)
  const [frontendDev,setFrontendDev] = useState(0)
  const [frontSite,setFrontSite] = useState(0)
  const [backendDev,setBackendDev] = useState(0)
  const [backSite,setBackSite] = useState(0)
  const [fullDev,setFullDev] = useState(0)
  const [fullSite,setFullSite] = useState(0)
  const [time,setTime] = useState(0)


  useEffect(() => {
    setInterval(() => {
      setTime(time => time + 1)
    },5000);
  },[]);

  useEffect(() => {
    if(time % 2 == 0){
      setCash(cash => cash - cost)
    }
    if(frontendDev > 0){
      setFrontSite(frontSite => frontSite + frontendDev)
    }
    if(backendDev > 0){
      setBackSite(backSite => backSite + backendDev)
    }
    if(fullDev > 0 && frontSite > 0 && backSite > 0){
      setFullSite(fullSite => fullSite + fullDev)
      setBackSite(backSite => backSite - 1)
      setFrontSite(frontSite => frontSite - 1)
    }
  },[time])


  useEffect(() => {
    if(fullDev > 0){
      setCost(cost + 900)
    }
  },[fullDev])

  useEffect(() => {
    if(backendDev > 0){
      setCost(cost + 600)
    }
  },[backendDev])
  useEffect(() => {
    if(frontendDev > 0){
      setCost(cost + 300)
    }
  },[frontendDev])

 

  const data = {
    cash,
    setCash,
    frontendDev,
    setFrontendDev,
    backendDev,
    setBackendDev,
    fullDev,
    setFullDev,
    frontSite,
    setFrontSite,
    backSite,
    setBackSite,
    fullSite,
    setFullSite,
  }

 
  return (
    <>
      <MainContext.Provider value={data}>
        <div className="header">
          <ul>
            <HeaderComponent value={cash + ' Manat'} title="Kassa" src={Manat} alt="Manat" />
            <HeaderComponent value={credit + ' Manat'} title="Kredit" src={Credit} alt="Credit" />
            <HeaderComponent value={cost + ' Manat'} title="Xərclər" src={Cost} alt="Cost" />
            <HeaderComponent value={frontendDev + ' Nəfər'} title="Frontend Developer" src={Worker} alt="Worker" />
            <HeaderComponent value={backendDev + ' Nəfər'} title="Backend Developer" src={Worker} alt="Worker" />
            <HeaderComponent value={fullDev + ' Nəfər'} title="Fullstack Developer" src={Worker} alt="Worker" />
            <HeaderComponent value={time + '.gün'} title="Zaman" src={Calendar} alt="Calendar" />
          </ul>
          <span className="profile-dropdown">
            FA
          </span>
        </div>
        <div className="content">
          <div class="information">
              <img src={Trophy} alt="Trophy"/>
              <img src={Info} alt="Info"/>
          </div>
          <div className="main-content">
            <ul className="actions">
              <SiteComponent sell={200} value={frontSite} src={Frontend} alt="Frontend"/>
              <SiteComponent sell={400} value={backSite} src={Backend} alt="Backend"/>
              <SiteComponent sell={700} value={fullSite} src={Fullstack} alt="Fullstack"/>
            </ul>
            <ul className="actions">
              <WorkerComponent salary={300} src={Worker} alt="Frontend"/>
              <WorkerComponent salary={600} src={Worker} alt="Backend"/>
              <WorkerComponent salary={900} src={Worker} alt="Fullstack"/>
            </ul>
          </div>
        </div>
      </MainContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
