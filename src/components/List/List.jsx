import Card from '../Card';
import * as S from './List.styles';
import { useCarnaval } from '../../context/CarnavalContext';

const List = () => {
  const blocks = useCarnaval();
  return (
    <S.Content>
      {blocks.map(({ img, name, location, description, id }) => (
        <Card key={id} banner={img} title={name} city={location}>
          {description}
        </Card>
      ))}
    </S.Content>
  );
};

export default List;
