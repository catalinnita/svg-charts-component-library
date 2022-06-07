
import { render } from "@testing-library/react"
import { Grid } from "./Grid"

it("renders the example component", () => {
    const { queryAllByText } = render(<Grid />)
    expect(queryAllByText('Example').length).toBe(1)
})