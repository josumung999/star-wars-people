import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

const People = lazy(() => import("./pages/People"));
const Person = lazy(() => import('./pages/Person'));

function App() {
  return (
    <NextUIProvider>
      <Navbar />
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<People />} />
            <Route path='/person/:id' element={<Person />}>

            </Route>
          </Routes>
        </Suspense>
      </Router>
      
    </NextUIProvider>
  );
}

export default App;
