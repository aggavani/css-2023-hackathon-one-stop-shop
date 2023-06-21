import React from 'react';
import materialConsistency from './data/SHIRT/material/metrics_consistency.png';
import materialValidValues from './data/SHIRT/material/metrics_valid_values.png';
import materialInvalidValues from './data/SHIRT/material/invalid_values.png';

export const MetricsPage = () => {
  const formValues = localStorage.getItem("formValues");
  var stringify = JSON.parse(formValues);
  const scope = stringify[0].scope
  const attribute = stringify[0].attribute;
  if (scope === "SHIRT" && attribute === "material") {
    return (
      <div>
        <img src={materialConsistency} alt='Material Consistency'/>
        <img src={materialValidValues} alt='Material Valid Values'/>
        <img src={materialInvalidValues} alt='Material Valid Values'/>
      </div>
    );
  }
};