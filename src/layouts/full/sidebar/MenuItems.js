import { SpaceDashboard } from '@mui/icons-material';

import { uniqueId } from 'lodash';

const Menuitems = [
  
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: SpaceDashboard,
    href: '/dashboard',
  },

  {
    id: uniqueId(),
    title: 'Companies',
    icon: SpaceDashboard,
    href: '/dashboard/companies',
  },


]

export default Menuitems;
