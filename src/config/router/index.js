import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DashboardKerabat from '../../pages/DashboardKerabat';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={DashboardKerabat} />
      </Switch>
    </Router>
  );
};

export default Routes;
