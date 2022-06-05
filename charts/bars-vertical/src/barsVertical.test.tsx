
import { render } from "@testing-library/react"
import { BarsVertical } from "./barsVertical"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarsVertical />)
    expect(queryAllByText('Example').length).toBe(1)
})