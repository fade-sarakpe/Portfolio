import iconLaptop from '@/assets/icon/icon-laptop.png';
import iconMobile from '@/assets/icon/icon-mobile.png';
import iconTyping from '@/assets/icon/icon-typing.png';
import iconCleanCode from '@/assets/icon/icon-clean-code.png';
import iconApi from '@/assets/icon/icon-api.png';
import iconDatabase from '@/assets/icon/icon-database.png';
import { ServicesType } from '@/types/types';

export const services: ServicesType[] = [
    {
      id: '01',
      title: 'Website Design',
      description: 'I Have Got Much Experience Working With Front-End Coding HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT',
      icon: iconLaptop
    },
    {
      id: '02',
      title: 'Responsivity',
      description: 'I Specialize In Making Websites Responsive, Ensuring They Look And Function Well On All Devices.',
      icon: iconMobile
    },
    {
      id: '03',
      title: 'Fast Typing',
      description: 'I Possess Rapid Coding Abilities, Allowing Me To Efficiently Craft Top-Tier Websites With Precision And Speed.',
      icon: iconTyping
    },
    {
      id: '04',
      title: 'Clean Code',
      description: 'I Specialize In Crafting Clean Code That\'s Easy To Understand, Making Website Development More Efficient.',
      icon: iconCleanCode  
    },
    {
      id: '05',
      title: 'API Integration',
      description: 'I Excel At Integrating Third-Party APIs And Building RESTful Services, Ensuring Seamless Data Flow And Enhanced Functionality.',
      icon: iconApi
    },
    {
      id: '06',
      title: 'Database Design',
      description: 'I Design Efficient Database Schemas And Optimize Queries For Scalable, High-Performance Applications With Strong Data Integrity.',
      icon: iconDatabase
    }
  ];