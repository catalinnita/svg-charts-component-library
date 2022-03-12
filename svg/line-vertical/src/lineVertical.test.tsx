
import { render } from "@testing-library/react"
import { LineVertical, Props } from "./lineVertical"

const defaultProps: Props = {
    x: 0,
    y: 0,
    size: 20,
}

it("renders the lineHorizontal component", () => {
    const { container } = render(<LineVertical {...defaultProps} />)
    expect(container).toBeDefined()
})