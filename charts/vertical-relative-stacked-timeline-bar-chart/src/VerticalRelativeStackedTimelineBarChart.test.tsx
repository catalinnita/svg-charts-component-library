
import { render } from "@testing-library/react"
import { VerticalRelativeStackedTimelineBarChart } from "./VerticalRelativeStackedTimelineBarChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<VerticalRelativeStackedTimelineBarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})