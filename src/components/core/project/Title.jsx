
import { cn } from '@nextui-org/react'
import PropTypes from 'prop-types'

const Title = ({title, sub, size}) => {
  return (
    <div className='flex flex-col gap-1'>
        <header className={cn('text-3xl font-thin', {'text-2xl': size})}>{title}</header>
        <p className=' text-gray-600 dark:text-gray-400'>{sub}</p>
    </div>
  )
}
Title.propTypes = {
    title: PropTypes.string, 
    sub: PropTypes.string,
    size: PropTypes.string,
}
export default Title
