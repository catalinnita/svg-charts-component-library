
import { render } from "@testing-library/react"
import { XAxis } from "./xAxis"

it("renders the example component", () => {
    const { queryAllByText } = render(<XAxis />)
    expect(queryAllByText('Example').length).toBe(1)
})