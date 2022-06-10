
import { render } from "@testing-library/react"
import { VerticalEvolutionBarChart } from "./VerticalEvolutionBarChart"

it("renders the example component", () => {
    const { queryAllByText } = render(<VerticalEvolutionBarChart />)
    expect(queryAllByText('Example').length).toBe(1)
})