
import { render } from "@testing-library/react"
import { TrendlineApproximationOnScatteredValues } from "./TrendlineApproximationOnScatteredValues"

it("renders the example component", () => {
    const { queryAllByText } = render(<TrendlineApproximationOnScatteredValues />)
    expect(queryAllByText('Example').length).toBe(1)
})