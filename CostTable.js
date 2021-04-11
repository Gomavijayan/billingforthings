import React, { useState } from "react";
import "./CostTable.css";
import EssayForm from './Calc';


const _defaultCosts = [
  {
    name: "maggie",
    qty:2,
    price: 12,
  },
  {
    name: "mushroom",
    qty:1,
    price: 85,
  },
  {
    name: "paneer",
    qty:2,
    price: 70,
  }
];
const CostTable = () => {
  const [costs, setCosts] = useState(_defaultCosts);

  const handleCostsChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
  };

  const addNewCost = () => {
    setCosts(prevCosts => [...prevCosts, { name: "", price: 0 }]);
  };
  
  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };
  return (
    <div className="table">
      <div className="table-title"><h1>FOOD COSTS</h1></div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div><h3>ITEM</h3></div>
            </div>
            <div className="table-data">
              <div><h3>NO OF QTY</h3></div>
            </div>
            <div className="table-data">
              <div><h3>PRICE</h3></div>
            </div>
          </div>
        </div>
        <div className="table-body">
          {costs.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleCostsChange}
                />
              </div>
              <div className="table-data">
                <input
                  name="qty"
                  data-id={index}
                  type="number"
                  value={item.qty}
                  onChange={handleCostsChange}
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleCostsChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewCost}><b>ADD ANOTHER PRODUCT</b></button>
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total</div>
            </div>
            <div className="table-data">
              <div>{getTotalCosts()}</div>
            </div>
          </div>
        </div>
        <EssayForm />
      </div>
    </div>
  );
};

export default CostTable;
