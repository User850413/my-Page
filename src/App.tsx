import { Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout';
import Contact from './pages/contact';
import Main from './pages/main';
import NotFound from './pages/notfound';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
