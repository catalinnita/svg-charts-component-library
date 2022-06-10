
import { render } from "@testing-library/react"
import { DenseTwoDimensionScatter } from "./DenseTwoDimensionScatter"

it("renders the example component", () => {
    const { queryAllByText } = render(<DenseTwoDimensionScatter />)
    expect(queryAllByText('Example').length).toBe(1)
})