import React from "react";
import PropTypes from "prop-types";

import "./Paginator.css";

class Paginator extends React.Component {

  static propTypes = {
    pages: PropTypes.number,
    updatePageCallBack:PropTypes.func
  };

  windowSize = 7;

  constructor(props) {
    super(props);
    this.state = { selected: 1};
    this.updateSelectedPage = this.updateSelectedPage.bind(this);
  }

  updateSelectedPage(selected) {
    this.setState({ selected });
    this.props.updatePageCallBack(selected)
  }

  pageOnClickHandler = (i, context) => {
    return function() {
      context.updateSelectedPage(i);
    };
  };

  prevBtnOnClickHandler = () => {
    this.updateSelectedPage(this.state.selected - 1);
  };

  nextBtnOnClickHandler = () => {
    this.updateSelectedPage(this.state.selected + 1);
  };

  constructPageNumber(i) {
      return (
        <a
          className={this.state.selected === i && 'page-selected'}
          href="#"
          onClick={this.pageOnClickHandler(i, this)}
        >
          {i}
        </a>
      );
  }

  constructPageRange() {
    let result = [];
    let halfWindow = Math.floor(this.windowSize / 2);
    const selected = this.state.selected;

    if (selected <= halfWindow) {
      for (let i = 1; i <= this.windowSize; i++) {
        result.push(this.constructPageNumber(i));
      }
    } else {
      for (
        let i = selected - halfWindow;
        i <= Math.min(this.props.pages, selected + halfWindow);
        i++
      ) {
        result.push(this.constructPageNumber(i));
      }
    }
    return result;
  }

  render() {
    const enablePrevBtn = this.state.selected > Math.floor(this.windowSize / 2) + 1;
    const enableNextBtn = this.props.pages > this.windowSize

    return (
      <div class="pagination">
        {enablePrevBtn && (
          <a href="#" onClick={this.prevBtnOnClickHandler}>
            {" "}
            &larr; Previous &nbsp;&nbsp;...
          </a>
        )}
        {this.constructPageRange()}
        {enableNextBtn && (
          <a href="#" onClick={this.nextBtnOnClickHandler}>
            {" "}
            ... &nbsp; &nbsp; Next &rarr;
          </a>
        )}
      </div>
    );
  }
}

export default Paginator;
