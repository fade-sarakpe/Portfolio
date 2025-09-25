import { FaComputer } from "react-icons/fa6";
import { IoIosTabletPortrait } from "react-icons/io";
import { RxKeyboard } from "react-icons/rx";
import { DiCodeBadge } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { BsDatabaseCheck } from "react-icons/bs";
import { ServicesType } from '@/types/types';

export const services: ServicesType[] = [
    {
      id: '01',
      title: 'Website Design',
      description: 'I Have Got Much Experience Working With Front-End Coding HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT',
      icon: FaComputer
    },
    {
      id: '02',
      title: 'Responsivity',
      description: 'I Specialize In Making Websites Responsive, Ensuring They Look And Function Well On All Devices.',
      icon: IoIosTabletPortrait
    },
    {
      id: '03',
      title: 'Rapid Prototyping',
      description: 'I Possess Rapid Coding Abilities, Allowing Me To Efficiently Craft Top-Tier Websites With Precision And Speed.',
      icon: RxKeyboard
    },
    {
      id: '04',
      title: 'Clean Code',
      description: 'I Specialize In Crafting Clean Code That\'s Easy To Understand, Making Website Development More Efficient.',
      icon: DiCodeBadge  
    },
    {
      id: '05',
      title: 'API Integration',
      description: 'I Excel At Integrating Third-Party APIs And Building RESTful Services, Ensuring Seamless Data Flow And Enhanced Functionality.',
      icon: TbApi
    },
    {
      id: '06',
      title: 'Database Design',
      description: 'I Design Efficient Database Schemas And Optimize Queries For Scalable, High-Performance Applications With Strong Data Integrity.',
      icon: BsDatabaseCheck
    }
  ];