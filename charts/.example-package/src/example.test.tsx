
import { render } from "@testing-library/react"
import { Example } from "./example"

it("renders the example component", () => {
    const { queryAllByText } = render(<Example />)
    expect(queryAllByText('Example').length).toBe(1)
})