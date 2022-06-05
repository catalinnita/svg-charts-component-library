
import { render } from "@testing-library/react"
import { LineSimple } from "./lineSimple"

it("renders the example component", () => {
    const { queryAllByText } = render(<LineSimple />)
    expect(queryAllByText('Example').length).toBe(1)
})