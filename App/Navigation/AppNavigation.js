import { StackNavigator } from 'react-navigation'
import MyScreen from '../Containers/MyScreen'
import MyList from '../Containers/MyList'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MyScreen: { screen: MyScreen },
  MyList: { screen: MyList },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
