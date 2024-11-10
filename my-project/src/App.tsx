import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { ReactElement } from 'react';
import IndexPage from './Pages';

const routes: { Path: string, Element: ReactElement }[] = [
  {
    Path: "/",
    Element: <IndexPage />
  }, 
]

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.Path} element={route.Element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
