
import { render } from "@testing-library/react"
import { BarsVerticalMulti } from "./barsVerticalMulti"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarsVerticalMulti />)
    expect(queryAllByText('Example').length).toBe(1)
})