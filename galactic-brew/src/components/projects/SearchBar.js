import _ from "lodash";
import React from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const source = _.times(1, () => ({
  title: "test",
}));

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

function SearchBar({ projects }) {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
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
          onResultSelect={(e, data) =>
            dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default SearchBar;

// import React from "react";
// import { connect } from "react-redux";
// import { Search, Grid, Header, Segment } from "semantic-ui-react";
// import {
//   cleanQuery,
//   startSearch,
//   finishSearch,
//   updateSelection,
// } from "../../actions";

// class SearchBar extends React.Component {
//   handleSearchChange(e) {
//     console.log(e.target.value);
//     this.props.startSearch(e.target.value);
//   }

//   render() {
//     console.log(this.props.loading);
//     return (
//       <Grid>
//         <Grid.Column width={6}>
//           <Search
//             loading={this.props.loading}
//             placeholder="Search..."
//             onResultSelect={(e, data) => this.props.updateSelection(data)}
//             onSearchChange={this.handleSearchChange}
//             results={this.props.results}
//             value={this.props.value}
//           />
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     projects: Object.values(state.projects),
//     loading: state.loading,
//     results: state.results,
//     value: state.value,
//   };
// };

// export default connect(mapStateToProps, {
//   cleanQuery,
//   startSearch,
//   finishSearch,
//   updateSelection,
// })(SearchBar);
