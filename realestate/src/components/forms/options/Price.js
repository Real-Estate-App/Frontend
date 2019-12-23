import React from 'react';

export default function Price() {
    return (
        <select name="price" className="form-control" id="type">
            <option selected="true" disabled="disabled">Max Price (Any)</option>
            <option value="100000">$100,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000</option>
            <option value="400000">$400,000</option>
            <option value="500000">$500,000</option>
            <option value="600000">$600,000</option>
            <option value="700000">$700,000</option>
            <option value="800000">$800,000</option>
            <option value="900000">$900,000</option>
            <option value="1000000">$1M+</option>
        </select>
    );
};