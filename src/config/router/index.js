import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  DashboardKerabatPage,
  MuatanDirimPage,
  PageNotFound,
} from '../../pages';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={DashboardKerabatPage} />
        <PrivateRoute path="/history" component={MuatanDirimPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
