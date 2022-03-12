
import { render } from "@testing-library/react"
import { BarHorizontal, Props } from "./barHorizontal"

const defaultProps: Props = {
    x: 0,
    y: 0,
    size: 20,
}

it("renders the lineHorizontal component", () => {
    const { container } = render(<BarHorizontal {...defaultProps} />)
    expect(container).toBeDefined()
})