import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import FeedContainer from "../screens/tabs/feed/FeedContainer"
import searchContainer from "../screens/tabs/search/SearchContainer"
import CalendarContainer from "../screens/tabs/calendar/CalendarContainer"
import Icon from "react-native-vector-icons/MaterialIcons"
export type TabStackParamList = {
  Feeds: undefined
  Calendar: undefined
  Search: undefined
}

const Tab = createBottomTabNavigator<TabStackParamList>()

const Tabs = () => (
  <Tab.Navigator initialRouteName="Feeds">
    <Tab.Screen
      name="Feeds"
      component={FeedContainer}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="list" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Calendar"
      component={CalendarContainer}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="event" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={searchContainer}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default Tabs
