type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      className='theme-toggle'
      type='button'
      onClick={onToggle}
      aria-label='Toggle light and dark mode'
    >
      <span>{theme === 'light' ? 'Light mode' : 'Dark mode'}</span>
      <span className='theme-toggle-dot' />
    </button>
  )
}

export default ThemeToggle
