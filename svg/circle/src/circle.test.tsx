
import { render } from "@testing-library/react"
import { Circle, Props } from "./circle"

const defaultProps: Props = {
    x: 0,
    y: 0,
    size: 20,
}

it("renders the lineHorizontal component", () => {
    const { container } = render(<Circle {...defaultProps} />)
    expect(container).toBeDefined()
})