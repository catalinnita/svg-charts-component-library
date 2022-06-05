
import { render } from "@testing-library/react"
import { BarsVerticalStacked } from "./barsVerticalStacked"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarsVerticalStacked />)
    expect(queryAllByText('Example').length).toBe(1)
})