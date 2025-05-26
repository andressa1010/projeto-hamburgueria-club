import {} from "react"
import { Container, DivLancheLogo, LogoDiv } from "../Styles/styled";
import imgLogo from "../assets/BurguerTs1.png"
import imgLanche from "../assets/lanche-logo.png"


const Logo = () => {
    return (
        <>
        <Container>
            <LogoDiv>
           <img src={imgLogo} alt="imagem logo"/>
        </LogoDiv>
        <DivLancheLogo>
            <img src={imgLanche} alt="imagem lanche"/>
        </DivLancheLogo>
        </Container>
        </>
      );
}
 
export default Logo;