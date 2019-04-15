import React, { useEffect, useState, useRef } from 'react'

function Responsive({ children, ...props }) {
  const ref = useRef()

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth)
      setHeight(ref.current.clientHeight)
    }
  })

  return (
    <div
      {...props}
      ref={ref}
    >
      {(width && height) ? children(width, height) : null}
    </div>
  )
}

export default Responsive
