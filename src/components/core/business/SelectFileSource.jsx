import SourceType from "./SourceType"


const SelectFileSource = () => {
  return (
    <div className="flex flex-col mb-10">
      <div className="w-full shadow-md shadow-sky-900/20 px-8 py-3 drop-shadow rounded-md grid grid-cols-[160px_1fr] border-x border-sky-100  gap-5">
            <div className="flex flex-col pt-4 gap-2 text-gray-700 text-sm">
                <div className="w-full h-[0.2rem] bg-gray-500 mb-3"></div>
                <section className="text-sky-600 font-bold cursor-pointer">All</section>
                <section className="cursor-pointer hover:text-sky-600">Files & Feeds</section>
                <section className="cursor-pointer hover:text-sky-600">Cloud Storage/Drive</section>
                <section className="cursor-pointer hover:text-sky-600">Database</section>
              
            </div>
            <div className="flex flex-col py-10 gap-2">
                <SourceType/>
            </div>
      </div>
    </div>
  )
}

export default SelectFileSource
