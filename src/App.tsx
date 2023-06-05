import { useDispatch } from "react-redux"
import { Routes, Route , BrowserRouter as Router } from "react-router-dom";

import { useEffect ,useState ,lazy, Suspense} from "react";

import { storageService } from "./services/StorageService/StorageService";




function App() {
    
   
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
            <Routes >
                
            </Routes>
            </Suspense>
        </Router>
        



    )
}

export default App
