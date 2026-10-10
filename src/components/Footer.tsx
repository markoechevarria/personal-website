const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-8">
        <p className="text-sm text-text-muted">
          © {year} Marko Echevarria. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
