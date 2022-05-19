import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const isSSR = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? window.innerWidth : 500,
  })

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth })
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize)

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])

  return windowSize
}
