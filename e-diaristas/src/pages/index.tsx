import Environment from "ui/components/feedback/SafeEnvironment/Environment";
import Title from "ui/components/data-display/PageTitle/Title";
import Informations from "ui/components/data-display/userInformations/Informations";

export default function Home() {
  return (
    <div>
      <Environment />
      <Title
        title={"conheça os proficionais"}
        subtitle={
          "Preencha o endereço e veja todos os proficionais da sua localidade"
        }
      />
      <Informations
        picture={"https://github.com/Higor-Lara.png"}
        name={"Higor Lara"}
        rating={4}
        description={"Não é obrigatorio"}
      />
    </div>
  );
}
