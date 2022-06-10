
import { render } from "@testing-library/react"
import { ComponentName } from "./componentName"

it("renders the example component", () => {
    const { queryAllByText } = render(<ComponentName />)
    expect(queryAllByText('Example').length).toBe(1)
})