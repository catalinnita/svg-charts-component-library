
import { render } from "@testing-library/react"
import { BarChart } from "./barChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})