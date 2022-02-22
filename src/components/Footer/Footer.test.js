import Footer from "./Footer";
import {screen,render} from "@testing-library/react";

describe('Footer',()=>{
  const params = {
    text:'Title Footer',
  }
  const {text} = params;
  beforeEach(() => {
    render(<Footer{...params}/>);
  });
  it("text render", async () => {
    screen.getByText(text);
  })
})
