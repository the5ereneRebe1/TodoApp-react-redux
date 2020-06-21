import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { connect } from "react-redux";
import {setFilter} from "../redux/actions";

const VisibilityFilters = ({ activeFilter,setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {console.log(currentFilter);
              setFilter(currentFilter)} /** waiting for setFilter handler*/}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};
const mapStatetoProps = state =>({ activeFilter: state.visibilityFilter});
export default connect(mapStatetoProps,{setFilter})(VisibilityFilters);
