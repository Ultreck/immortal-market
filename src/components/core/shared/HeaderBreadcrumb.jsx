
import { Fragment,} from "react";
import { RxSlash } from "react-icons/rx";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

 function HeaderBreadCrumb({currentPage, text}) {
  return (
    <Fragment>
      <section>
              <div className="flex flex-col gap-2">
                <h2 className="font-helvetica font-medium text-xl md:text-3xl tracking-wide">
                 {text}
                </h2>
                <div className="flex" >
                  <span className="text-gray-400 uppercase text-xs flex items-center gap-1 font-helvetica">
                    <Link to='/overview'>Home</Link>
                    </span>
                  <span className="text-gray-400 uppercase text-xs flex items-center gap-1 font-helvetica">
                    <RxSlash className="text-md" />
                    </span>
                  <span className="text-gray-400 uppercase text-xs flex items-center gap-1 font-helvetica">
                    {currentPage}
                    </span>
                </div>
              </div>
      </section>
    </Fragment>
  );
}

HeaderBreadCrumb.propTypes = {
    currentPage: PropTypes.string,
    text: PropTypes.string,
  };

  export default  HeaderBreadCrumb
