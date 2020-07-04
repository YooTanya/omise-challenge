import { useDispatch, useSelector } from 'react-redux';
import { getCharities, getPayments } from './store/actions';
import { getMessageState, getDonationState } from './store/selectors';

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(getMessageState);
  const donation = useSelector(getDonationState);

  useEffect(() => {
    dispatch(getCharities());
    dispatch(getPayments());
  },[dispatch]);

  return <div>TEST</div>;
};

export default App;
