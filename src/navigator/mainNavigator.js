import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings164082Navigator from '../features/Settings164082/navigator';
import Settings164067Navigator from '../features/Settings164067/navigator';
import NotificationList164066Navigator from '../features/NotificationList164066/navigator';
import Maps164065Navigator from '../features/Maps164065/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings164082: { screen: Settings164082Navigator },
Settings164067: { screen: Settings164067Navigator },
NotificationList164066: { screen: NotificationList164066Navigator },
Maps164065: { screen: Maps164065Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
