
import { render } from "@testing-library/react"
import { BarsHorizontalMulti } from "./barsHorizontalMulti"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarsHorizontalMulti />)
    expect(queryAllByText('Example').length).toBe(1)
})