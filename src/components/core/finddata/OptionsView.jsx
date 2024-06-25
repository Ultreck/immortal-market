
const options = [
  {
    subject: "CX",
    amount: "$1,999"
  },
  {
    subject: "Market",
    amount: "$3,900"
  },
  {
    subject: "Complain",
    amount: "$450"
  },
  {
    subject: "CX",
    amount: "$1,999"
  },
  {
    subject: "Market",
    amount: "$3,900"
  },
  {
    subject: "Complain",
    amount: "$450"
  },
]
const OptionsView = () => {
    return (
      <div className="border dark:border-zinc-900 flex flex-col p-4 md:p-6 bg-white rounded-xl  dark:bg-[#18181b] gap-10 relative overflow-hidden">
      <div className="tracking-wider text-2xl font-light ">Choose from options</div>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  max-w-full">
          {
            options?.map((opt, i) => (
            <div key={i} className="border dark:border-zinc-700 flex flex-col p-2 px-6  gap-10 rounded-md hover:scale-95 transition-all duration-1000 cursor-pointer bg-[#f8f8f8] dark:bg-zinc-800">
                <span className="text-4xl py-2 pt-6 text-[#52658c]">{opt?.subject}</span>
                <ul style={{listStyleType:"circle"}} className="flex flex-col gap-2 tracking-wider ml-4">
                    <li>Select from multiple projects</li>
                    <li>Build your dashboard from template</li>
                    <li>Get notified realtime.</li>
                </ul>

                <div className="flex flex-col py-6">
                  <small>Starts</small>
                  <big className="text-[#52658c] text-3xl">{opt?.amount}</big>
                </div>

            </div>

            ))
          }
      </div>
  </div>
    )
  }
  
  export default OptionsView
  