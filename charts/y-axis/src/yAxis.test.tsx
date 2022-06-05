
import { render } from "@testing-library/react"
import { YAxis } from "./yAxis"

it("renders the example component", () => {
    const { queryAllByText } = render(<YAxis />)
    expect(queryAllByText('Example').length).toBe(1)
})