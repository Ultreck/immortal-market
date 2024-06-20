import useBusinessStore from '@/store/business.js';
import { useGetUserBusiness } from '@/api/business.js';
import { useNavigate } from 'react-router-dom';

const useBusiness = () => {
  const { data: { businesses = [] } = {}, isLoading } = useGetUserBusiness();
  const current = useBusinessStore((state) => state.data.current);
  const business = businesses.find((b) => b._id === current);
  const updateBusinessStore = useBusinessStore((state) => state.updateData);
  const navigate = useNavigate();

  const setCurrent = (id) => {
    updateBusinessStore({ current: id });
    navigate('/');
  };

  return { business, id: current, businesses, setCurrent, isLoading };
};

export default useBusiness;
