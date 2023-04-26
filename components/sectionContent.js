export default function SectionContent({children}) {
    return (
     <div className={`order-2 lg:order-none px-4 py-8  w-full lg:w-1/2 lg:my-auto max-h-screen overflow-hidden`}>
        <div className="max-w-xl ">
          {children}
        </div>
      </div>
    )
}