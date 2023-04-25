export default function SectionContent({children}) {
    return (
     <div className={`w-1/2 my-auto max-h-screen overflow-scroll`}>
        <div className="max-w-xl ">
          {children}
        </div>
      </div>
    )
}