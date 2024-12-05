import { Routes, Route } from 'react-router-dom';

// components
import Add from '../pages/Add';
import Profile from '../pages/Profile';  // Profile should now be the landing page
//import Cards from '../pages/Cards';
import Savings from '../pages/Savings';
//import Transactions from '../pages/Transactions';

const Navigation = (): JSX.Element => (
  <Routes>
    {/* Make Profile the main page */}
    <Route path="/" element={<Profile />} />  {/* Página principal cuando se accede a localhost:3000 */}
    
    {/* Otras rutas */}
    <Route path="/add" element={<Add />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/savings" element={<Savings />} />

  </Routes>
);

export default Navigation;
