
import { render } from "@testing-library/react"
import { YearToYearTrendlineComparison } from "./YearToYearTrendlineComparison"

it("renders the example component", () => {
    const { queryAllByText } = render(<YearToYearTrendlineComparison />)
    expect(queryAllByText('Example').length).toBe(1)
})