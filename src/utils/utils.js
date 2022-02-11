import {useLocation, useNavigate, useParams} from 'react-router-dom';
import React from 'react';

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{location, navigate, params}} />;
  }

  return ComponentWithRouterProp;
}

export const formatDate = {
  DDMMYYYY: dateObj => dateObj.toISOString().slice(0, 10).split('-').reverse().join('-'),
};
