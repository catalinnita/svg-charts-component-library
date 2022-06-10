
import { render } from "@testing-library/react"
import { CurrentVersusEstimateTrendArea } from "./CurrentVersusEstimateTrendArea"

it("renders the example component", () => {
    const { queryAllByText } = render(<CurrentVersusEstimateTrendArea />)
    expect(queryAllByText('Example').length).toBe(1)
})