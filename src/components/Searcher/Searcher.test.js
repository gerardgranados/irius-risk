import {screen, fireEvent, render, cleanup} from "@testing-library/react";
import Searcher from "./Searcher";
import {ORDER_DIRECTIONS} from "config/constants/objectTypes";


describe('Searcher', () => {
  const params = {
    options: [
      {
        name:'price',
        value:'price'
      },{
        name:'name',
        value:'name'
      }
    ],
    values:{
      search:'searchValue',
      orderBy:'price',
      direction:ORDER_DIRECTIONS['ascending']
    },
    searchChange:jest.fn(),
    directionChange:jest.fn(),
    orderByChange:jest.fn()
  }

  beforeEach(() => {
    render(<Searcher {...params}/>);
  });

  it("update search correctly and call searchChangeFn", async () => {
    const search = screen.getByTestId("search-input");
    const newSearchValue = 'keyword';
    fireEvent.change(search, {target: {value:newSearchValue}})
    expect(params.searchChange).toHaveBeenCalled()
  })
  it("click on toogle Direction and call searchChangeFn", async () => {
    const toggleDirection = screen.getByTestId("toggle-direction");
    fireEvent.click(toggleDirection)
    expect(params.directionChange).toHaveBeenCalled()
  })
  it("update select filter and call orderByChange", async () => {
    const selectFilter = screen.getByTestId("select-filters");
    fireEvent.change(selectFilter, {target: {value:params.options[1].value}})
    expect(params.orderByChange).toHaveBeenCalled()
  })

})
