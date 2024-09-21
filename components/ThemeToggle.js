import { useTheme } from "./contexts/ThemeContext";
import { FaMoon, FaSun  } from "react-icons/fa6";
import styled from "styled-components";

const Button = styled.button`
    color: ${({ theme }) => theme.text};
    background: none;
    margin-top: 5px;
    border: none;
    cursor: pointer;
    font-size: 38px;
    transition: calc(.3s);
    &:hover {
        color: ${({ theme }) => theme.text};
        transform: scale(1.1);
    }
    @media (max-width: 560px){
        font-size: 28px;
        margin-left: 15px;
        margin-top: 4px;
    }
`
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' && <FaMoon />}
      {theme === 'dark' && <FaSun  />}
    </Button>
  );
};

export default ThemeToggle;
