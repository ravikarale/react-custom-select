import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import './CustomSelect.css';

class CustomSelect extends Component {
  constructor(props) {
		super(props);
    this.state = {
			selected: "",
			label: "name",
			defaultIcon:"color-block",
      suggestions: [],
      searchText: "",
      isBorder: false,
      show: false,
      canBack: false,
      border: "solid 1px #d1d1d1",
      defaultColor: "#d1d1d1",
      notFound: "hide"
    };
  }

  componentDidMount = () => {
    this.setState({
      suggestions: this.props.options ? this.props.options : [],
      selected: this.props.default ? this.props.default : ""
    });
  };

  onClickInput = () => {
    this.setState({ show: true, suggestions: this.props.options });
  };

  onSearchTextChange = e => {
    const value = e.target.value;
    const searchBy = this.props.searchBy ? this.props.searchBy : "name";
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.props.options.filter(s =>
        regex.test(`${s[searchBy]}`)
      );
    } else {
      suggestions = this.props.options;
    }
    this.setState({
      suggestions: suggestions,
      searchText: value,
      show: true,
    });
  };

  removeSelected = () => {
    this.setState({ selected: "" })
    this.props.onChange(null)
  }

  renderSearchSuggestions = () => {
    let klass = this.getSuggestionClass()
    let name = this.props.suggesionBy ? this.props.suggesionBy : "name";
    return (
      <>
        { this.state.show ? (
          <>
            <div>
              <input onKeyUp={this.handleKeyPress} onChange={this.onSearchTextChange} placeholder={this.props.inputPlaceholder ? this.props.inputPlaceholder : "search here"} value={this.state.searchText} type="text" />
            </div>
            {this.state.suggestions.length > 0 ? (
              <ul>
                {this.state.suggestions.map((option, idx) => {
                  return (
                    <li key={idx} className="suggestion-li" onClick={() => this.selectSuggestion(option)}>
                      {this.props.labelIcon ? (
                      option.icon ? (<span className=""><i className={`icon ${option.icon}`}></i></span>)
                        : (<div style={{ backgroundColor: option.icon ? "" : option.color ? option.color :  this.state.defaultColor}} className={`icon ${klass}`}></div>)
                      )
                      :null}
                      <div className="suggestion-name">{`${option[name]}`}</div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <span className="" style={{ padding: "5px" }}>
                No Match Found
              </span>
            )}
          </>
        ) : (
          null
        )}
      </>
    );
	};

	getClass = (selected) => {
		if(this.props.defaultIcon == "icon"){
			return selected.icon ? selected.icon :  this.state.defaultIcon
		}else{
			return this.props.defaultIcon == "block" ? "color-block" : "color-dot"
		}
	}

	getSuggestionClass = () => {
		if(this.props.defaultIcon == "icon"){
			return this.state.defaultIcon
		}else{
			return this.props.defaultIcon == "block" ? "color-block" : "color-dot"
		}
	}

  renderSelectedSuggestion = () => {
		let selected = this.state.selected;
		if(selected){
			let label = this.props.label ? selected[this.props.label] : selected[this.state.label] ? selected[this.state.label] : "" 
      let klass = this.getClass(selected)
			return(
        <>
          <li className="selected-li">
            {this.props.labelIcon ? (
            <div style={{ backgroundColor: selected.icon ? "" : selected.color ? selected.color :  this.state.defaultColor}} className={`d-inline-block icon ${klass}`}></div>
            ):null}
            <div className="suggestion-name d-inline-block">{label}</div>
          </li>
          <div className="close-icon d-inline-block" onClick={this.removeSelected}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </>
			)
		}
		return null
  };

  selectSuggestion = option => {
    this.setState({ selected: option, show: false, searchText: "" });
    this.props.onChange(option);
  };

  handleKeyPress = event => {
    if (event.keyCode === 13 && this.state.suggestions.length > 0) {
      let option = this.state.suggestions[0];
      this.setState({ selected: option, show: false, searchText: "" });
      this.props.onChange(option);
    }
  };

  closeSuggestion = () => {
    if (this.state.show) {
      this.setState({ show: false });
    }
  };

  handleClickOutside = () => {
    this.setState({ show: false });
  };

  render() {
    const { props } = this;
    return (
      <>
      <div className={props.className} style={props.style} onClick={this.onClickInput}>
        <div className="selected-tags">
          {this.props.placeholder && this.state.selected == "" ? (
            <div
              style={{
                padding: "5px",
                height: '34px',
                color: "#9b9b9b",
                font: "16px"
              }}
            >
              {props.placeholder}
            </div>
          ) : (
            this.renderSelectedSuggestion()
          )}
        </div>
        <div className={`suggestion-holder  ${this.state.show ? "suggestion-holder-border" : "" }`}>
          {this.renderSearchSuggestions()}
        </div>
			</div>
      </>
    );
  }
}

export default onClickOutside(CustomSelect);
