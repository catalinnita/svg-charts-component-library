
import { render } from "@testing-library/react"
import Page from "./index"

it("renders the example component", () => {
    const { queryAllByText } = render(<Page />)
    expect(queryAllByText('Acme Documentation').length).toBe(1)
})