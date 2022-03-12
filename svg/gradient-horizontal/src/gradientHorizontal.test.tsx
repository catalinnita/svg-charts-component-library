
import { render } from "@testing-library/react"
import { GradientHorizontal, Props } from "./gradientHorizontal"

const defaultProps: Props = {
    id: 'gradient',
    size: 315,
    startColor: 'rgb(0,0,0)',
    endColor: 'rgb(255,255,255)',
}

it("renders the lineHorizontal component", () => {
    const { container } = render(<GradientHorizontal {...defaultProps} />)
    expect(container).toBeDefined()
})