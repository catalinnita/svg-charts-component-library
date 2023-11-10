
import { render } from "@testing-library/react"
import { Labels } from "./Labels"

it("renders the example component", () => {
    const { queryAllByText } = render(<Labels />)
    expect(queryAllByText('Example').length).toBe(1)
})