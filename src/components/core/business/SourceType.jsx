import UploadOptionCard from "./UploadOptionCard";
import {file_source}  from "@/lib/business.js";



const SourceType = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        file_source?.map(data => (
          <UploadOptionCard key={data.id} data={data}/>

        ))
      }

       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]}/>
       <UploadOptionCard data={file_source[7]} />
   
    </div>
  )
}

export default SourceType
