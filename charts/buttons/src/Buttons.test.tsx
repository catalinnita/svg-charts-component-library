
import { render } from "@testing-library/react"
import { Buttons } from "./Buttons"

it("renders the example component", () => {
    const { queryAllByText } = render(<Buttons />)
    expect(queryAllByText('Example').length).toBe(1)
})