/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Tooltip } from "antd"
import classNames from "classnames"


const ToolButton = ({Icon, label, isActive, onClick}) => {
  return (
    <Tooltip placement="right" title={label}>
      <Button onClick={onClick}  icon={<Icon/>} className={ classNames("border-none hover:!bg-blue-200", isActive && "bg-blue-200" )  }>
      </Button>
    </Tooltip>
  )
}

export default ToolButton
