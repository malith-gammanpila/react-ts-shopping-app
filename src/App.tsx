import { Button, Grid, Typography } from '@mui/material';
import './App.css';

import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import { ItemsContainer } from './containers/items.container';

const Wraper = () => {
  const { items, setItems } = ItemsContainer.useContainer();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 100,
          borderBottom: '5px solid #f0f0f0',
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          REACT/TS SHOPPING APP
        </Typography>
      </Grid>
      <AddItem />
      <ListItem items={items} />
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          setItems([]);
        }}
        sx={{
          margin: 2,
          position: 'fixed',
          right: 0,
        }}
      >
        Reset
      </Button>
    </Grid>
  );
};

const App = (): JSX.Element => {
  return (
    <ItemsContainer.Provider>
      <Wraper />
    </ItemsContainer.Provider>
  );
};

export default App;
