
import { render } from "@testing-library/react"
import { VerticalCategoryBarChart } from "./VerticalCategoryBarChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<VerticalCategoryBarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})