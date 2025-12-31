export function Background() {
  return (
    <div className='fixed inset-0 -z-10 w-screen h-screen bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#131313_1px,transparent_1px)] [background-size:16px_16px]'>
      <div className='absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/20 dark:bg-purple-500/30 opacity-40 blur-[100px] animate-pulse' />
      <div className='absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/20 dark:bg-cyan-500/30 opacity-40 blur-[100px] animate-pulse' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/10 dark:bg-blue-500/20 opacity-30 blur-[120px]' />
    </div>
  )
}
