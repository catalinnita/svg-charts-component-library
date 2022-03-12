
import { render } from "@testing-library/react"
import { BarVertical, Props } from "./barVertical"

const defaultProps: Props = {
    x: 0,
    y: 0,
    size: 20,
}

it("renders the lineHorizontal component", () => {
    const { container } = render(<BarVertical {...defaultProps} />)
    expect(container).toBeDefined()
})