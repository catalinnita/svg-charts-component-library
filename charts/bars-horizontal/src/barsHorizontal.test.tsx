
import { render } from "@testing-library/react"
import { BarsHorizontal } from "./barsHorizontal"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarsHorizontal />)
    expect(queryAllByText('Example').length).toBe(1)
})