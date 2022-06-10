
import { render } from "@testing-library/react"
import { ComparisonHorizontalBarChart } from "./ComparisonHorizontalBarChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<ComparisonHorizontalBarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})