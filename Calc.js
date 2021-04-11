import React from "react";
import './Calc.css'; 

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            Totalprice:'',
            Discount:'',
            Tax:'',
        };
        this.handleTextChange = this.handleTextChange.bind(this);

        this.handleTextLastChange = this.handleTextLastChange.bind(this);

        this.handleTextFirstChange = this.handleTextFirstChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
handleTextChange(event) {
    this.setState({Totalprice: Number(event.target.value)});
}

handleTextLastChange(event) {
    this.setState({Discount: Number(event.target.value)});
}

handleTextFirstChange(event) {
    this.setState({Tax: Number(event.target.value)});
}

handleSubmit(event) {
event.preventDefault();
  alert("Paid successfully");
}
render() { 
 return (
  <div className="example"><hr></hr>
      <form onSubmit={this.handleSubmit}>
      <span>Totalprice:</span>
      <input type="text" value={this.state.Total} onChange={this.handleTextChange} />
      <span>Discount:</span>
      <input type="text" value={this.state.Discount} onChange= {this.handleTextLastChange} />
      </form>
      <div className="preview">
        <span><h2>Tax :</h2></span>
      <input type="Number" value={this.state.Tax} onChange= {this.handleTextFirstChange} />
        </div><hr></hr>
        <div className="preview">
          <h1>Discounted Amount</h1>
          <div>{this.state.Totalprice - (this.state.Totalprice / 100 * this.state.Discount) }</div>
        </div>
        <div className="preview">
          <h1>Amount with tax to be paid</h1>
          <div>{this.state.Totalprice - (this.state.Totalprice / 100 * this.state.Discount) * this.state.Tax}</div>
        </div>
        <input type="submit" value="PAY" onClick={this.handleSubmit} />
    </div>
);
}
} 

  
export default EssayForm;

