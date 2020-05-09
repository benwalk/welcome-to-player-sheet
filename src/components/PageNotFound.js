import React from 'react';
import PropTypes from 'prop-types';
import { Code } from '../styles/style';
import s from '../styles/pageNotFound.style';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <div>
      <p style={s.p}>
        Page not found: <Code>{location.pathname}</Code>
      </p>
      <p style={s.p}>You must have taken a wrong turn.</p>
    </div>
  );
}

PageNotFound.propTypes = propTypes;
