import { Button, Card } from '@nextui-org/react'
import TagIcon from '/images/tag.png'


const FreemiumPlan = () => {
  return (
    <Card
    hover
    role="button"
    tabIndex={0}
    aria-label="Upload a new document"
    aria-describedby="Upload a new document"
    aria-hidden={false}
    aria-disabled={false}
    className="px-6 py-8 flex flex-col  relative space-y-3 "
    >
    <p className='text-2xl dark:text-white/80'>Freemium Plan</p>
    <p className='text-sm text-gray-500 tracking-widest'>7 days more</p>
    <div className='mr-auto'>
        <Button color="primary" radius="full" variant="ghost" className="w-full mt-1" size="sm" >
                Try Now
        </Button>
    </div>


    <div className="w-36 h-36 rounded-full flex items-center justify-center text-white text-xl md:text-3xl font-semibold absolute right-0 bottom-0">
        <img src={TagIcon} alt="" className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text" />
      
    </div>
   
    </Card>
  )
}

export default FreemiumPlan
