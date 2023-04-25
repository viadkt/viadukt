export default function Section({children}) {
  return (
    <div className={`relative flex  flex-wrap items-center justify-center  w-1/2 h-full z-10`}>
        {children}
    </div>
  )

  
}