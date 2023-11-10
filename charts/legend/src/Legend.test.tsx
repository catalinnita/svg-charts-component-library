
import { render } from "@testing-library/react"
import { Legend } from "./Legend"

it("renders the example component", () => {
    const { queryAllByText } = render(<Legend />)
    expect(queryAllByText('Example').length).toBe(1)
})