import {useLocalStorage} from "hooks/useLocalStorage";
import {THEMES} from "config/constants/themes";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", THEMES['light'])
  const handleChangeTheme = () => theme === THEMES['light']
    ? setTheme(THEMES['dark'])
    : setTheme(THEMES['light'])

  return {theme, handleChangeTheme}
}

