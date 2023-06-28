import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import FeedContainer from "../screens/tabs/feed/FeedContainer"
import searchContainer from "../screens/tabs/search/SearchContainer"
import CalendarContainer from "../screens/tabs/calendar/CalendarContainer"

export type TabStackParamList = {
  Feeds: undefined
  Calendar: undefined
  Search: undefined
}

const Tab = createBottomTabNavigator<TabStackParamList>()

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feeds" component={FeedContainer} />
    <Tab.Screen name="Calendar" component={CalendarContainer} />
    <Tab.Screen name="Search" component={searchContainer} />
  </Tab.Navigator>
)

export default Tabs
