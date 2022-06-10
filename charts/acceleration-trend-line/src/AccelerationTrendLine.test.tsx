
import { render } from "@testing-library/react"
import { AccelerationTrendLine } from "./AccelerationTrendLine"

it("renders the example component", () => {
    const { queryAllByText } = render(<AccelerationTrendLine />)
    expect(queryAllByText('Example').length).toBe(1)
})