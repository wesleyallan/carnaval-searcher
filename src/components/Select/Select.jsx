import * as S from './Select.styles';

const Select = ({ icon, chevron, children, ...rest }) => {
  return (
    <S.Select icon={icon} chevron={chevron} {...rest}>
      {children}
    </S.Select>
  );
};

export default Select;
