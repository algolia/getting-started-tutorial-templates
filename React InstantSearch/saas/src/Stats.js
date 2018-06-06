import React from 'react';
import PropTypes from 'prop-types';
import { connectStats } from 'react-instantsearch-dom';

const Stats = ({ nbHits, processingTimeMS }) => (
  <div className="ais-Stats">
    <span role="img" aria-label="Lighting fast">
      ⚡️
    </span>{' '}
    <strong>{nbHits}</strong> results found in {processingTimeMS}ms
  </div>
);

Stats.propTypes = {
  nbHits: PropTypes.number.isRequired,
  processingTimeMS: PropTypes.number.isRequired,
};

export default connectStats(Stats);
