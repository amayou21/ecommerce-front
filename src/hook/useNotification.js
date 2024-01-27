import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UseNotification = (val, state) => {
  // Show new notification
  if (state === 'success') {
    toast.success(val);
  } else if (state === 'warning') {
    toast.warning(val);
  } else if (state === 'error') {
    toast.error(val);
  }
};

export default UseNotification;
