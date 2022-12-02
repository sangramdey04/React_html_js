import {useEffect} from 'react'

export default function useTitle(props) {
    useEffect(()=>{
        document.title = props+ " hits on button"
    })

//   return (
//     <div>useTitle</div>
//   )
}
