
import React from 'react'

const withWrapper = (Story, context) => {
  return (
      <>
          <Story {...context} />
      </>
  )
}

export const decorators = [withWrapper];