import useScrollThreshold from '../../hooks/useScrollThreshold'

const getViewportHeight = () => window.innerHeight

function BackToTopButton() {
  const isVisible = useScrollThreshold(getViewportHeight)

  if (!isVisible) {
    return null
  }

  return (
    <a className='back-to-top' href='#top' aria-label='Back to top'>
      <svg aria-hidden='true' viewBox='0 0 24 24' focusable='false'>
        <path d='M12 5l7 7-1.4 1.4-4.6-4.6V20h-2V8.8l-4.6 4.6L5 12l7-7z' />
      </svg>
    </a>
  )
}

export default BackToTopButton
