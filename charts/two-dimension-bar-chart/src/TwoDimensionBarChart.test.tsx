
import { render } from "@testing-library/react"
import { TwoDimensionBarChart } from "./TwoDimensionBarChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<TwoDimensionBarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})