export default function SectionImage({className, children}) {
  return (
    <div className={`relative  flex  flex-wrap items-center justify-center  w-full h-1/3  lg:w-1/2 lg:h-full z-10  overflow-hidden lg:overflow-visible`}>
        {children}
    </div>
  )
}