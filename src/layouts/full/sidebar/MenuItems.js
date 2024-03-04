import { ListAlt, Receipt, SpaceDashboard } from '@mui/icons-material';

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
    title: 'Categorize Sentiments',
    icon: SpaceDashboard,
    href: '/dashboard/categorize-social-media-sentiments',
  },

  {

    id:uniqueId(),
    title:"Detect Negative Sentiments",
    icon: ListAlt,
    href:"/dashboard/detect-negative-sentiments"

  },

  {
    id:uniqueId(),
    title:"Personalized Campaigns",
    icon: Receipt,
    href:"/dashboard/personalize-campaigns"

  }
]

export default Menuitems;
