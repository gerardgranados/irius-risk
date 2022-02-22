import {screen,fireEvent,render,cleanup} from "@testing-library/react";
import Card from "./Card";
import ImageNotFound from 'assets/images/image-not-found.png'
afterEach(cleanup)
describe('Card',()=>{
  const params = {
    title: "title",
    subtitle:"subtitle",
    text:'text',
    image:'https://starwars-visualguide.com/assets/img/planets/1.jpg',
  }
  const {title,subtitle,text,image} = params

  beforeEach(() => {
    render(<Card {...params}/>);
  });

  it("render title, subtitle, description and card image correctly", async () => {
    screen.getByText(title);
    screen.getByText(subtitle);
    screen.getByText(text);
    expect(screen.getByRole('img')).toHaveAttribute('src',image)
  })
  it("render default image when resource fail", async () => {
    const image = screen.getByRole('img');
    fireEvent.error(image)
    expect(screen.getByRole('img')).toHaveAttribute('src',ImageNotFound)
  })

})
