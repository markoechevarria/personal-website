type IconProps = {
  className?: string
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <img src="/github.svg" alt="GitHub" className={className} />
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <img src="/linkedin.png" alt="LinkedIn" className={className} />
  )
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m8.66-10H19m-4.34 0l1.34 2.68M6.34 12l1.34-2.68M4 12h2.34m8.36 4.34L12 16m-4.34 0l-1.34 2.68M12 7v2m0 6v2" />
    </svg>
  )
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 0111.21 3a7 7 0 008.79 9.79z" />
      <line x1="12" y1="2" x2="12" y2="6m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4 12h4m8 0h4" stroke="currentColor" />
    </svg>
  )
}

export function Logo({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="8" className="stroke-current" strokeWidth="2" />
      <path d="M14 34V14h4v20h-4zM26 14l8 20h-4l-2-6h-4l-2 6h-4L18 14h8z" fill="currentColor" />
    </svg>
  )
}
