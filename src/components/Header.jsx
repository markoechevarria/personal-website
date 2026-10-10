import { navLinks, Logo } from '../data/constants'
import { SunIcon, MoonIcon } from '../icons'

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-14 px-8">
        <a href="#hero" className="flex items-center gap-2 text-lg font-semibold text-text">
          <Logo className="w-6 h-6 text-accent" />
          <span>Marko Echevarria</span>
        </a>
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface border border-border text-text-muted hover:border-accent hover:text-accent transition-all"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
