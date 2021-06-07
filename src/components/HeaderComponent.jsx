import { useContext } from 'react';
import MainContext from '../MainContext';
const HeaderComponent = ({src,alt,title,value}) => {

    return(
        <>
            <li>
                <img src={src} alt={alt}/>
                <div>{title}</div>
                <p>{value} {(alt == 'Worker' && value == 10) ? '(Max.)' : null}</p>
            </li>
        </>
    )
}
export default HeaderComponent