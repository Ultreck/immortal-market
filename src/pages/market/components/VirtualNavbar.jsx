import { TbDotsVertical } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const linkItems = [
  { name: 'Home', href: '/markets/virtuals'},
  { name: 'Crypto', href: '/markets/virtuals/crypto'},
  { name: 'Orders', href: '/markets/virtuals/orders'},
  { name: 'Fx', href: '/markets/virtuals/fx'},
];

const VirtualNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="flex justify-between h-[80px] container py-6 mb-8">
         <div className="cursor-pointer" onClick={() => navigate('/markets')} >
           <p className="text-2xl font-bold">Virtuals</p>
           <p className="opacity-70 my-auto">23 Nov 2025</p>
         </div>
         <div className="flex gap-10">
           <div className="flex gap-10">
             {linkItems.map((item) => (
               <Link key={item.name} to={item.href}>
                 <div className={`text-base font-semibold ${item.href === location.pathname? 'border-[#4691c5] border-b-2 text-[#4691c5]' : ''}`}>{item.name}</div>
               </Link>
             ))}
           </div>
           <TbDotsVertical className="mt-2" />
         </div>
       </div>
  )
}

export default VirtualNavbar