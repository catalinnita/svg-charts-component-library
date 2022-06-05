
import { render } from "@testing-library/react"
import { ScatterPlot } from "./scatterPlot"

it("renders the example component", () => {
    const { queryAllByText } = render(<ScatterPlot />)
    expect(queryAllByText('Example').length).toBe(1)
})