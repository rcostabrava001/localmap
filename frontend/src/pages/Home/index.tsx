import {
  Container,
  Title,
  Button,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>Findme.id OS Dashboard Control</Title>
        <SubTitle>Encontre no sistema de controle da Findme.id tudo o que você precisa!</SubTitle>

        <Link to="/new">
          <Button>
            <ButtonBox>{">"}</ButtonBox>
            Cadastre sua Empresa e sua OS
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
