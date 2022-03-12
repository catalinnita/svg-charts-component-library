
import { render } from "@testing-library/react"
import { LineHorizontal, Props } from "./lineHorizontal"

const defaultProps: Props = {
    start: 0,
    end: 20,
}

it("renders the lineHorizontal component", () => {
    const { container } = render(<LineHorizontal {...defaultProps} />)
    expect(container).toBeDefined()
})