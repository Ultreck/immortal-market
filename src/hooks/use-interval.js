

import React, {useState} from 'react'

const useInterval = () => {

    const [startIn, setstartIn] = useState(0);
    const [shouldStart, setshouldStart] = useState(false);
    const [endTime, setendTime] = useState(new Date());

  return {
    startIn,
    setstartIn,
    shouldStart,
    setshouldStart,
    endTime,
    setendTime
  }
}

export default useInterval
