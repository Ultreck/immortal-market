import React from 'react';
import FinancialCard from './FinancialCard';

const banksName = [
    "Accessbank",
    "Gtbank",
    "Accessbank", 
    "Gtbank", 
]
const GamingFinancialDetails = () => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-5'>
        {banksName.map((bank, index) => 
        <div key={index} className="text">
            <FinancialCard item={bank} className={'px-3 pb-2'} />
        </div>
        )}
    </div>
  )
}

export default GamingFinancialDetails