import React from 'react';
import completenessContributor from './data/SHIRT/material/completeness_contributor.png';
import completenessRate from './data/SHIRT/material/completeness_rate.png';

export const CompletenessPage = () => {
  const formValues = localStorage.getItem("formValues");
  var stringify = JSON.parse(formValues);
  const scope = stringify[0].scope
  const attribute = stringify[0].attribute;
  if (scope === "SHIRT" && attribute === "material") {
    return (
      <div>
        <img src={completenessContributor} alt='Completeness Contributor'/>
        <img src={completenessRate} alt='Completeness Rate'/>
      </div>
    );
  }
};