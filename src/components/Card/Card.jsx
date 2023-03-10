import { useEffect } from 'react';
import { useCarnaval } from '../../context/CarnavalContext';
import * as S from './Card.styles';
import locate from '../../assets/locate.svg';

const Card = ({ banner, title, city, children }) => {
  const context = useCarnaval();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (elements) => {
        elements.forEach((element) => {
          if (element.intersectionRatio >= 0.5) {
            element.target.classList.add('size-opacity-on');
          }
        });
      },
      {
        threshold: [0.5, 1],
      }
    );
    const elementsArray = Array.from(
      document.querySelectorAll('.size-opacity-off')
    );
    elementsArray.forEach((element) => observer.observe(element));
  }, [context]);

  return (
    <S.Card className="size-opacity-off">
      <S.ContainerImg>
        <S.Banner src={banner} alt="Banner do bloco de carnaval" />
      </S.ContainerImg>
      <S.Title>{title}</S.Title>
      <p>{children}</p>
      <S.ContainerLocation>
        <img src={locate} alt="Ícone de localização" />
        <p>{city}</p>
      </S.ContainerLocation>
    </S.Card>
  );
};

export default Card;
