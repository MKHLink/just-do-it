import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TrainerList from './TrainerList';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

function WorkoutTab() {

  return (
    <Tabs>
    <TabList>
      <Tab>Workouts</Tab>
      <Tab>Trainers</Tab>
      <Tab>Create a Workout</Tab>
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
  </Tabs>
  )
};

export default WorkoutTab;