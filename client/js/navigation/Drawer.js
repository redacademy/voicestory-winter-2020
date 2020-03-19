const Drawer = createDrawerNavigator();
const MeatballStackScreens = props => {
  //   props.navigation.dispatch(DrawerActions.openDrawer());
  //   props.navigation.dispatch(DrawerActions.closeDrawer());
  console.log(props);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={SettingsStackScreens} />
      <Drawer.Screen name="About Us" component={AboutUsStackScreens} />
      <Drawer.Screen name="Contact Us" component={ContactUsStackScreens} />
      <Drawer.Screen
        name="Privacy Pollicy"
        component={PrivacyPolicyStackScreens}
      />
    </Drawer.Navigator>
  );
};
export default MeatballStackScreens;
