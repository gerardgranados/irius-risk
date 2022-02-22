import {renderHook} from '@testing-library/react-hooks'
import {useTheme} from 'hooks/useTheme'
import {waitFor} from "@testing-library/react";
import {THEMES} from "config/constants/themes";

describe('useTheme', () => {
  it("check initial and update theme", async () => {
    const {result} = renderHook(() => useTheme())
    expect(result.current.theme).toBe(THEMES['light'])
    await waitFor(() => result.current.handleChangeTheme());
    expect(result.current.theme).toBe(THEMES['dark'])
    await waitFor(() => result.current.handleChangeTheme());
    expect(result.current.theme).toBe(THEMES['light'])
  })
})
