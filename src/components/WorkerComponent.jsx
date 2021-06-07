import {useContext, useState} from 'react';
import MainContext from '../MainContext';
import Info from '../img/information.png';
const WorkerComponent = ({src,alt,salary}) => {

    const {cash,setCash,frontendDev,setFrontendDev,backendDev,setBackendDev,fullDev,setFullDev} = useContext(MainContext)

    const buyWorker = () => {
        if(alt == 'Frontend' && frontendDev < 10 && cash >= salary){
            setCash(cash - salary)
            setFrontendDev(frontendDev + 1)
        }
        else if(alt == 'Backend' && backendDev < 10 && cash >= salary){
            setCash(cash - salary)
            setBackendDev(backendDev + 1)
        }
        else if(alt == 'Fullstack' && fullDev < 10 && cash >= salary){
            setCash(cash - salary)
            setFullDev(fullDev + 1)
        }
    }

    return(
        <>
            <li>
                <img className="action-info-icon" src={Info} alt="Info"/>
                <div className="action-info">
                    salam nem ele bele falan sdafds 
                </div>
                <img src={src} alt={alt}/>
                <p>{alt} Developer</p>
                <button disabled={salary > cash ? true : false} className="create" onClick={buyWorker}>İşə Götür - {salary}</button>
            </li>
        </>
    )
}

export default WorkerComponent