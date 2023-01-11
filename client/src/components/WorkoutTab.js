import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TrainerList from './TrainerList';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import WorkoutChest from './Chest';
import WorkoutBack from './Back';
import WorkoutLegs from './Legs';
import WorkoutShoulders from './Shoulders';
import WorkoutAbs from './Abs';

function WorkoutTab() {

  return (
    <Tabs>
    <TabList>
      <Tab>Workouts</Tab>
      <Tab>My Fitness</Tab>
      <Tab>Create a Workout</Tab>
      <Tab>Chest Workouts</Tab>
      <Tab>Back Workouts</Tab>
      <Tab>Leg Workouts</Tab>
      <Tab>Shoulders Workouts</Tab>
      <Tab>Abs Workouts</Tab>
    </TabList>

    <TabPanel>
      <WorkoutList/>
    </TabPanel>
    <TabPanel>
        <TrainerList/>
    </TabPanel>
    <TabPanel>
        <WorkoutForm/>
    </TabPanel>
    <TabPanel>
        <WorkoutChest/>
    </TabPanel>
    <TabPanel>
        <WorkoutBack/>
    </TabPanel>
    <TabPanel>
        <WorkoutLegs/>
    </TabPanel>
    <TabPanel>
        <WorkoutShoulders/>
    </TabPanel>
    <TabPanel>
        <WorkoutAbs/>
    </TabPanel>
  </Tabs>
  )
};

export default WorkoutTab;