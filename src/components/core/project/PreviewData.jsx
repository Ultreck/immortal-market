import { Button, Input, Radio, RadioGroup, cn } from "@nextui-org/react"

import { useState } from "react"
import Title from "../shared/Title"


const sampledataRaw = [
  {
    header: 'CustomerID',
    sample: "C-12334900",
    datatype: "Number",
    linked: true,
    _id: 1
  },
  {
    header: 'Disb Date',
    sample: "22-Nov-2022 (DD-MM-YYYY)",
    datatype: "Date",
    linked: true,
    _id: 2
  },
  {
    header: 'Disbursment',
    sample: "26.900",
    datatype: "Number",
    linked: true,
    _id: 3
  },
  {
    header: 'Disbursment',
    sample: "26.900",
    datatype: "Number",
    linked: true,
    _id: 4
  },
]




const PreviewData = () => {

const [sampledata, setSampledata] = useState(sampledataRaw)
const [editingIndex, setEditingIndex] = useState(null)




const unLink = (id)=>{
  setSampledata([...sampledata.map(dd => {
     if(dd._id === id){
      dd.linked = !dd.linked
     }
     return dd
  })])
  setEditingIndex(null)
}




  return (
    <div className="flex flex-col gap-10 px-7 md:px-12  py-10 max-h-[100vh] overflow-hidden">
      <Title
        title={  'Preview your data'}
        sub={'select from multiple sources'}
      />

      <RadioGroup
         orientation="horizontal" 
         className="gap-10"
         classNames={{
           wrapper: "gap-x-12 gap-y-4 "
         }}
        >
            <Radio color="default"  value="file 1"> <span className="text-gray-700 dark:text-gray-300/80">File 1</span></Radio>
            <Radio color="default"  value="file 2"  ><span className="text-gray-700 dark:text-gray-300/80">File 2</span></Radio>
            <Radio color="default"  value="file 3"><span className="text-gray-700 dark:text-gray-300/80">File 3</span></Radio>          
        </RadioGroup>

      <div className="flex flex-col gap-7 flex-1 overscroll-auto overflow-auto scrollbar-hide">
        {
          sampledata?.map(dt => (
          <div key={dt._id} className="border dark:border-gray-700  flex justify-between p-6 flex-wrap rounded relative">

              <div className={cn("bg-[#fafafa]/90 dark:bg-[#18181b]/90 absolute z-10 top-0 left-0 w-full h-full  items-center justify-center", editingIndex === dt?._id ? 'flex' : 'hidden')} >

                <div className="flex gap-6">
                  <Button onClick={()=>unLink(dt?._id)} variant="shadow" color="primary" className="rounded">{dt?.linked ? 'Unlink' : 'Link'}</Button>
                  <Button onClick={()=>setEditingIndex(null)} variant="bordered" color="danger" className="rounded-md">Cancel</Button>
                </div>

              </div>

            <div className="flex flex-col flex-1 min-w-52  gap-10 sm:gap-2">

              <div className="flex flex-col sm:flex-row gap-0 sm:items-center  sm:gap-24 justify-start ">
                <div className=" text-base font-medium  text-gray-700 dark:text-gray-300/80">Header</div>
                <div className="flex-1">
                  <Input
                    placeholder="header"
                    value={dt?.header}
                    allowClear={true}
                    size="lg"
                    variant="underlined"
                    classNames={{
                      inputWrapper: 'border-gray-400/80 border-b-1 shadow-none shadow-0 ',
                    }}
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-0 sm:items-center   sm:gap-24 justify-between ">
                <div className=" text-base font-medium  text-gray-700 dark:text-gray-300/80">Sample</div>
                <div className="flex-1">
                  <Input
                    placeholder="sample"
                    value={dt?.sample}
                    allowClear={true}
                    size="lg"
                    variant="underlined"
                    classNames={{
                      inputWrapper: 'border-gray-400/80 border-b-1 shadow-none shadow-0 ',
                    }}
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-0 sm:items-center   sm:gap-20 justify-between ">
                <div className=" text-base font-medium  text-gray-700 dark:text-gray-300/80">Data type</div>
                <div className="flex-1">
                  <Input
                    placeholder="data type"
                    value={dt?.datatype}
                    allowClear={true}
                    size="lg"
                    variant="underlined"
                    classNames={{
                      inputWrapper: 'border-gray-400/80 border-b-1 shadow-none shadow-0 ',
                    }}
                  ></Input>
                </div>
              </div>

            </div>
            <div className="w-20 md:w-32  mt-4 ">
              <div className="flex gap-2 border rounded-full justify-end items-center max-w-[4.5rem] px-1 ml-auto shadow-md cursor-pointer"  onClick={()=>setEditingIndex(dt?._id)}>
                    <div className="text-gray-500">Link</div>
                    <div className={cn("w-4 h-4 rounded-full border ", dt?.linked ? 'bg-[#00a759]' : 'bg-[#aaa]')}></div>
              </div>
            </div>
          </div>

          ))
        }

      </div>


        <div className="flex p-4 py-10 gap-4 border-t border-gray-300 dark:border-black/40 bg-[#f4f4f5] dark:bg-zinc-800/50">
          <Button color="primary">Continue</Button>
          <Button color="danger">Cancel</Button>
        </div>





    </div>
  )
}

export default PreviewData
