import * as S from './Card.styles';
import locate from '../../assets/locate.svg';

const Card = ({ banner, title, city, children }) => {
  return (
    <S.Card>
      <S.ContainerImg>
        <img src={banner} alt="Banner do bloco de carnaval" />
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
