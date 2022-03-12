
import { render } from "@testing-library/react"
import { BarChartVertical } from "./barChartVertical"

it("renders the example component", () => {
    const { queryAllByText } = render(<BarChartVertical />)
    expect(queryAllByText('Example').length).toBe(1)
})