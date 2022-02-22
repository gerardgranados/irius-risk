import ErrorAlert from "./ErrorAlert";
import {screen,fireEvent,render} from "@testing-library/react";

describe('ErrorAlert',()=>{
  const params = {
    error:'Error',
    onHide:jest.fn(),
  }
  const {error,onHide} = params;
  beforeEach(() => {
    render(<ErrorAlert{...params}/>);
  });
  it("click on close alert and call onHide fn", async () => {
    const closeIcon = screen.getByTestId("close-error");
    fireEvent.click(closeIcon);
    expect(onHide).toHaveBeenCalled()
  })
})
