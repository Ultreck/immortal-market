
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5";
import ToolButton from "./ToolButton"
import {  PiNavigationArrowBold } from "react-icons/pi";
import { FaRegCircle, FaRegStickyNote } from "react-icons/fa";
import { LuType } from "react-icons/lu";
import { MdOutlineRectangle } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import PropTypes from 'prop-types';



const Toolbar = ({canvasState, setCanvasState}) => {
  return (
    <div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4'>
      <div className='bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md'>
            <ToolButton 
                label={"Select"}
                Icon={PiNavigationArrowBold}
                onClick={()=>setCanvasState("Select")}
                isActive={canvasState === "Select"}
            />
            <ToolButton 
                label={"Text"}
                Icon={LuType}
                onClick={()=>setCanvasState("Text")}
                isActive={canvasState === "Text"}
            />
            <ToolButton 
                label={"Note"}
                Icon={FaRegStickyNote}
                onClick={()=>setCanvasState("Note")}
                isActive={canvasState === "Note"}
            />
            <ToolButton 
                label={"Rectangle"}
                Icon={MdOutlineRectangle}
                onClick={()=>setCanvasState("Rectangle")}
                isActive={canvasState === "Rectangle"}
            />
            <ToolButton 
                label={"Ellipse"}
                Icon={FaRegCircle}
                onClick={()=>setCanvasState("Ellipse")}
                isActive={canvasState === "Ellipse"}
            />
            <ToolButton 
                label={"Pen"}
                Icon={BsPencil}
                onClick={()=>setCanvasState("Pen")}
                isActive={canvasState === "Pen"}
            />
        
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col gap-y-1 items-center shadow-md">
      <ToolButton 
                label={"select"}
                Icon={IoArrowUndo}
            />
      <ToolButton 
                label={"select"}
                Icon={IoArrowRedo}
            />
      </div>
    </div>
  )
}



Toolbar.propTypes = {
    canvasState: PropTypes.any,
    setCanvasState: PropTypes.any
};

export default Toolbar
