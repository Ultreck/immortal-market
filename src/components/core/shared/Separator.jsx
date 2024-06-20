import {Fragment} from 'react'
import PropType from 'prop-types'



export default function Separator({separatorText}) {
  return (
    <Fragment>
        <div className="flex items-center space-x-2 w-full mt-10">
            <div className="page-separator__text whitespace-nowrap">{separatorText}</div>
          <span className="w-full h-1 border-t border-slate-300 mt-[0.4rem]"></span>
          </div>
    </Fragment>
  )
}
Separator.propTypes = {
    separatorText: PropType.string
} 