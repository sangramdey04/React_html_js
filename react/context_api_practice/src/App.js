 
 import React from 'react';
import { createContext } from 'react';
// import CompA from "./context/CompA.jsx"

import CommpA from './context_api/CommpA';
import CommpB from './context_api/CommpB';


export const FirstName = createContext();

function App() {
  return (
    <>
{/*    
   for context folder

    <FirstName.Provider  value={"Sangram(sd)"}>
    <CompA/>
</FirstName.Provider> */}

{/* for context_api folder (we use useContext hook here )
it is an alternative of the above code */}
    
    <FirstName.Provider  value={"West Bengal"}>
    <CommpB/>
</FirstName.Provider>
<CommpA/>
  
    
    </>
  );
}

export default App;
// export {FirstName}; 
