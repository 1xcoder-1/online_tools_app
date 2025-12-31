export function Footer() {
  return (
    <footer className='py-8 border-t border-border/40 mt-12 bg-background/50 backdrop-blur-sm'>
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between px-4 md:px-8 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Tools Online. All rights reserved.</p>
        <p>Made with ❤️ by @1xcoder</p>
      </div>
    </footer>
  )
}
