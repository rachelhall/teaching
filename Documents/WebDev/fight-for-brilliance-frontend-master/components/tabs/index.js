import { createContext } from 'react';
import TabContent from './content';
import Tabs from './wrapper';

const TabContext = createContext(null);

// exports
export { TabContent, Tabs, TabContext };
