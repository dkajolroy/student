import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';

export default function MainNavigation() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </>
  );
}
