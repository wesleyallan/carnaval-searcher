import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import List from './components/List';
import Map from './components/Map';
import NotFound from './pages/NotFound';
import GlobalStyles from './styles/GlobalStyles';
import Light from './themes/Light';

const App = () => {
  return (
    <ThemeProvider theme={Light}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/list" element={<List />} />
            <Route path="/map" element={<Map />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
