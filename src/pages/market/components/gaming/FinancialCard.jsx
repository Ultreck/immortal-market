
import React from 'react'
import PredictionButton from './PredictionButton'
import Image from 'next/image'
import { useTheme } from 'next-themes';

const FinancialCard = ({item}) => {
    const { resolvedTheme: theme } = useTheme();
  return (
    <div className={`w-full border-2 h-full ${theme === 'dark' ? 'border-gray-500' : ''}`}>
      <div className={`p-8`}>
        <div className="text flex items-center space-x-2 py-3 ">
            <Image src={item.url.src} alt='Bank logos' layout='reponsive' width={30} height={30}/>
            <div className="text-2xl">{item.name}</div>
        </div>
        <div className="">
          <div className="text-xl text my-5 pb-3">Will {item.name} surpass N20b rev in 2025 Q2 alone</div>
          <div className="text">
            <div className="text space-y-5">
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N20b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text='Yes' />
                  <PredictionButton type="no" text='No' />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N35b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text='Yes' />
                  <PredictionButton type="no" text='No' />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N50b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text='Yes' />
                  <PredictionButton type="no" text='No' />
                </div>
              </div>
            </div>
            <div className="text space-y-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialCard