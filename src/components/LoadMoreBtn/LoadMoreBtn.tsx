import React from "react";
import * as S from "./LoadMore.styled";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return <S.LoadMoreBtn onClick={onClick}>Load more</S.LoadMoreBtn>;
};

export default LoadMoreBtn;
