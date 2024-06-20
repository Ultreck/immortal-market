import HeaderBreadCrumb from "./HeaderBreadcrumb"
import PropTypes from 'prop-types';
import RigthBar from "./RigthBar";


function DashboardHeader ({page, text}) {

  return (
    <div className="flex flex-col border-b pb-5">
        <div className="flex justify-between gap-2  flex-wrap">
            <HeaderBreadCrumb currentPage={page} text={text}/>

            <RigthBar/>
        </div>
    </div>
  )
}

DashboardHeader.propTypes = {
    page: PropTypes.string,
    text: PropTypes.string,
}

export default DashboardHeader
