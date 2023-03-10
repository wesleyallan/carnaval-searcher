import { useEffect } from 'react';
import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Select from '../../components/Select';
import chevronDown from '../../assets/chevron-down.svg';
import searchIcon from '../../assets/search.svg';
import locate from '../../assets/locate.svg';
import data from '../../data/data.json';
import * as S from './Home.styles';
import { CarnavalProvider } from '../../context/CarnavalContext';

const Home = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const cities = data.blocos.filter((obj, index) => {
    return (
      data.blocos.findIndex((item) => item.location === obj.location) === index
    );
  });

  useEffect(() => {
    const element = document.querySelector('.size-opacity-off');
    const observer = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add('size-opacity-on');
        }
      });
    });

    observer.observe(element);
  }, []);

  return (
    <>
      <S.Header>
        <S.HeaderContent className="size-opacity-off">
          <S.Message>find your block</S.Message>
          <S.TitleContainer>
            <S.Title>
              Encontre os <span>melhores blocos</span> de carnaval de 2023
            </S.Title>
          </S.TitleContainer>
          <S.Form method="GET">
            <Input
              id="name"
              icon={searchIcon}
              type="text"
              name="name"
              placeholder="Pesquise por nome"
            />
            <Select id="city" icon={locate} chevron={chevronDown} name="city">
              <option key="0" value="all">
                Todas Cidades
              </option>
              {cities.map(({ id, location, locationId }) => (
                <option key={id} value={locationId}>
                  {location}
                </option>
              ))}
            </Select>
            <S.Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const elements = Array.from(
                  document.querySelectorAll('article.size-opacity-off')
                );
                elements.forEach((e) => e.classList.remove('size-opacity-on'));
                const name = document.getElementById('name').value;
                const city = document.getElementById('city').value;
                navigate(`?name=${name}&city=${city}`, { replace: true });
              }}
            >
              Buscar Agora
            </S.Button>
          </S.Form>
        </S.HeaderContent>
      </S.Header>
      <S.ContentContainer>
        <S.ContentHeader>
          <S.ContentTitle className="size-opacity-off">
            Blocos Recomendados
          </S.ContentTitle>
          <S.Menu className="size-opacity-off">
            <S.MenuItem to={`./list${search}`}>Lista</S.MenuItem>
            <S.MenuItem to={`./map${search}`}>Mapa</S.MenuItem>
          </S.Menu>
        </S.ContentHeader>
        <CarnavalProvider>
          <Outlet />
        </CarnavalProvider>
      </S.ContentContainer>
      {pathname === '/' && <Navigate to="./list" />}
    </>
  );
};

export default Home;
