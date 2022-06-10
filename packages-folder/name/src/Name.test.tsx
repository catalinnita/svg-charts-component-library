
import { render } from "@testing-library/react"
import { Name } from "./Name"

it("renders the example component", () => {
    const { queryAllByText } = render(<Name />)
    expect(queryAllByText('Example').length).toBe(1)
})