import { useState , useEffect} from "react";

const useonline = ()=>{
    const [isonline, setIsOnline] = useState(true);

    useEffect(()=>{
        const onlinehandeler = ()=>{
            setIsOnline(true);
        }
        const offlinehandeler = ()=>{
            setIsOnline(false);
        }
        window.addEventListener('online',onlinehandeler);
        window.addEventListener('offline',offlinehandeler);

        return ()=>{
            window.removeEventListener('online',onlinehandeler);
            window.removeEventListener('offline',offlinehandeler);
        }
    },[])
    
    return isonline;

}
export default useonline;