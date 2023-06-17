import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import FeedContainer from "./feed/FeedContainer"
import searchContainer from "./search/SearchContainer"
import CalendarContainer from "./calendar/CalendarContainer"

const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feeds" component={FeedContainer} />
    <Tab.Screen name="Calendar" component={CalendarContainer} />
    <Tab.Screen name="Search" component={searchContainer} />
  </Tab.Navigator>
)

export default Tabs
