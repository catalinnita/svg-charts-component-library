
import { render } from "@testing-library/react"
import { VerticalStackedTimelineBarChart } from "./VerticalStackedTimelineBarChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<VerticalStackedTimelineBarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})