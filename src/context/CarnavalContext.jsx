import { createContext, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../data/data.json';

const CarnavalContext = createContext();

export const CarnavalProvider = ({ children }) => {
  const [blocks, setBlocks] = useState(data.blocos);
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const name = params.get('name');
    const city = params.get('city');
    let filteredBlocks = data.blocos;

    if (name) {
      filteredBlocks = filteredBlocks.filter((block) =>
        block.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (city && city !== 'all') {
      filteredBlocks = filteredBlocks.filter(
        (block) => block.locationId === Number(city)
      );
    }

    setBlocks(filteredBlocks);
  }, [search]);

  return (
    <CarnavalContext.Provider value={blocks}>
      {children}
    </CarnavalContext.Provider>
  );
};

export const useCarnaval = () => {
  const context = useContext(CarnavalContext);
  if (!context) {
    throw new Error('useCarnaval must be used within a CarnavalProvider');
  }
  return context;
};
