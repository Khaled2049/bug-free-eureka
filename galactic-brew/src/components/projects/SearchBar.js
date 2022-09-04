import _ from "lodash";
import React, { useState } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  cleanQuery,
  startSearch,
  finishSearch,
  updateSelection,
  loadProjects,
} from "../../actions";

function SearchBar(props) {
  const [source, setsource] = useState([{ title: "test" }, { title: "asdf" }]);
  const { projects, loading, results, value } = props;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      props.startSearch(data);

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          props.cleanQuery();
          return;
        }
        const re = new RegExp(_.escapeRegExp(data.value), "i");

        const isMatch = (result) => {
          return re.test(result.title);
        };
        const results = _.filter(projects, isMatch);

        props.finishSearch(results);
      }, 300);
    },
    [value]
  );
  React.useEffect(() => {
    props.loadProjects();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          placeholder="Search..."
          onResultSelect={(e, data) => props.updateSelection(data)}
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.search.loading,
    results: state.search.results,
    value: state.search.value,
    projects: state.search.allProjects,
  };
};

export default connect(mapStateToProps, {
  cleanQuery,
  startSearch,
  finishSearch,
  updateSelection,
  loadProjects,
})(SearchBar);
