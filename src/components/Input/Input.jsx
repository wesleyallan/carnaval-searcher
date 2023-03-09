import * as S from './Input.styles';

const Input = ({ icon, chevron, children, ...rest }) => {
  if (icon && chevron) {
    return <S.Input icon={icon} chevron={chevron} ref={ref} {...rest} />;
  }
  return <S.Input icon={icon} {...rest} />;
};

export default Input;
