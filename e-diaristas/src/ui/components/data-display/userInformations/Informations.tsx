import React from "react";
import {
  InformationsContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./Informations.style";

interface InformationsProps {
  picture?: string;
  name: string;
  rating: number;
  description?: string;
}

const Informations: React.FC<InformationsProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <InformationsContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </InformationsContainer>
  );
};

export default Informations;
