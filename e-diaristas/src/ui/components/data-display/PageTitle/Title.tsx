import React from "react";
import {
  TitleContainer,
  TitleStyled,
  SubtitleStyled,
} from "ui/components/data-display/PageTitle/Title.style";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FunctionComponent<TitleProps> = (props) => {
  return (
    <TitleContainer>
      <TitleStyled>{props.title}</TitleStyled>
      <SubtitleStyled>{props.subtitle}</SubtitleStyled>
    </TitleContainer>
  );
};

export default Title;
