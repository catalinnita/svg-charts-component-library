
import { render } from "@testing-library/react"
import { BarChartHorizontal } from "./barChartHorizontal"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarChartHorizontal />)
    expect(queryAllByText('Example').length).toBe(1)
})