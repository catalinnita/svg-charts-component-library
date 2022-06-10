
import { render } from "@testing-library/react"
import { HorizontalCategoryBarChart } from "./HorizontalCategoryBarChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<HorizontalCategoryBarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})