import React from "react";

import * as S from "./ImageCard.styles";

type Props = {
  alt: string;
  image: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
};

const ImageCard = ({ alt, image, onClick }: Props) => {
  return (
    <li>
      <S.Div>
        <S.Image src={image} alt={alt} onClick={onClick} />
      </S.Div>
    </li>
  );
};

export default ImageCard;
