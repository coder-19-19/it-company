import { useContext,useEffect,useState } from 'react';
import MainContext from '../MainContext';
import Info from '../img/information.png';
import Sell from '../sounds/sell.mp3';
import Keyboard from '../sounds/keyboard.mp3';

const SiteComponent = ({src,alt,value,sell}) => {

    const [disabled,setDisabled] = useState(false)
    const {cash,setCash,frontSite,setFrontSite,backSite,setBackSite,fullSite,setFullSite} = useContext(MainContext)
    

    const createSite = () => {
        const keyboardSound = new Audio(Keyboard)
        if(alt == 'Frontend'){
            keyboardSound.play()
            setDisabled(true)
            setFrontSite(frontSite + 1)
            setTimeout(() => {
                setDisabled(false)
            },5000)
        }
        else if(alt == 'Backend'){
            keyboardSound.play()
            setDisabled(true)
            setBackSite(backSite + 1)
            setTimeout(() => {
                setDisabled(false)
            },5000)
        }
        else if(alt == 'Fullstack' && frontSite > 0 && backSite > 0){
            keyboardSound.play()
            setDisabled(true)
            setFrontSite(frontSite - 1)
            setBackSite(backSite - 1)
            setFullSite(fullSite + 1)
            setTimeout(() => {
                setDisabled(false)
            },5000)
        }
    }

    const sellSite = () => {
        const sellSound = new Audio(Sell)
        sellSound.play()
        setCash(cash + sell)
        switch(alt){
            case 'Frontend':
                setFrontSite(frontSite - 1)
                break
            case 'Backend':
                setBackSite(backSite - 1)
                break
            case 'Fullstack':
                setFullSite(fullSite - 1)
                break
        }
    }

    const sellAllSite = () => {
        switch(alt){
            case 'Frontend':
                setCash(cash + (sell * frontSite))
                setFrontSite(0)
                break
            case 'Backend':
                setCash(cash + (sell * backSite))
                setBackSite(0)
                break
            case 'Fullstack':
                setCash(cash + (sell * fullSite))
                setFullSite(0)
                break
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
                <p>{alt} Sayt - {value}</p>
                <button disabled={disabled} className="create" onClick={createSite}>Yarat</button>
                <button disabled={value > 0 ? false : true} onClick={sellSite} className="sell">Sat</button>
                <button disabled={value > 0 ? false : true} onClick={sellAllSite} className="sell">Hamsın Sat</button>
            </li>
        </>
    )
}

export default SiteComponent