
import { render } from "@testing-library/react"
import { BarsHorizontalStacked } from "./barsHorizontalStacked"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarsHorizontalStacked />)
    expect(queryAllByText('Example').length).toBe(1)
})