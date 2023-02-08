import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
const Grid = lazy(() => import('./Grid'));
const List = lazy(() => import('./List'));



function App() {

  return (
    <div className="App">
       <BrowserRouter>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path="/" element={<Grid />} />
               <Route path="/list" element={<List />} />
            </Routes>
         </Suspense>
      </BrowserRouter>
     {/* <Grid/> */}
   
    </div>
  );
}

export default App;
