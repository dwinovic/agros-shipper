import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DashboardKerabatPage, MuatanDirimPage } from '../../pages';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={DashboardKerabatPage} />
        <PrivateRoute path="/muatan-dikirim" component={MuatanDirimPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
