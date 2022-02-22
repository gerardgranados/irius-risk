import Paginator from "./Paginator";
import {screen,fireEvent,render} from "@testing-library/react";

describe('Paginator',()=>{
  const params = {
    onChange:jest.fn(),
  }
  const {onChange} = params;

  it("click on previous and next and call onChange fn", async () => {
    render(<Paginator{...params} previous={1} next={3}/>);

    const previous = screen.getByTestId("previous");
    const next = screen.getByTestId("previous");

    fireEvent.click(previous);
    expect(onChange).toHaveBeenCalledTimes(1)
    fireEvent.click(next);
    expect(onChange).toHaveBeenCalledTimes(2)
  })
  it("dont call onChangefn when previous or next dont have value", async () => {
    render(<Paginator{...params}/>);
    const previous = screen.getByTestId("previous");
    const next = screen.getByTestId("previous");
    fireEvent.click(previous);
    expect(onChange).not.toHaveBeenCalled()
    fireEvent.click(next);
    expect(onChange).not.toHaveBeenCalled()
  })
})
