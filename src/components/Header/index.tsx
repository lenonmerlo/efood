import logo from '../../assets/images/logo.png'
import { HeaderContainer, Logo, Message } from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt="Efood logo" />
    <Message>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Message>
  </HeaderContainer>
)

export default Header;
