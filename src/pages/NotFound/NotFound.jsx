import Fail from '../../assets/fail.svg';
import * as S from './NotFount.styles';

const NotFound = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>
          <img src={Fail} alt="Ícone de falha" />
          Page Not Found
        </S.Title>
        <S.Button to="../"> Voltar para Home</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default NotFound;
