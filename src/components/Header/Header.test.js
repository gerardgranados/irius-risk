import Header from "./Header";
import {screen,fireEvent,render} from "@testing-library/react";

describe('Header',()=>{
  const params = {
    title:'Title Header',
    openMenu:jest.fn(),
    changeTheme:jest.fn(),
  }
  const {title,openMenu,changeTheme} = params;
  beforeEach(() => {
    render(<Header{...params}/>);
  });
  it("title render", async () => {
    screen.getByText(title);
  })
  it("click on toggle theme and call change theme fn", async () => {
    const toggleTheme = screen.getByTestId("toggle-theme");
    fireEvent.click(toggleTheme);
    expect(changeTheme).toHaveBeenCalled()
  })
  it("click on toggle menu and call open menu fn", async () => {
    const toggleMenu = screen.getByTestId("toggle-menu");
    fireEvent.click(toggleMenu);
    expect(openMenu).toHaveBeenCalled()
  })
})
