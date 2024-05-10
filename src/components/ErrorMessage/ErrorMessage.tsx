import * as S from "./ErrorMessage.styled";

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  return <S.Message>{message}</S.Message>;
};

export default ErrorMessage;
