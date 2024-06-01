import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ItemsContainer } from '../containers/items.container';
import Item from '../types/item';

interface ListItemProps {
  items: Item[];
}

interface RenderListItemProps {
  ele: Item;
  i: number;
}

// passing props to the component
const ListItem = ({ items }: ListItemProps): JSX.Element => {
  const RenderListItem = ({ ele, i }: RenderListItemProps): JSX.Element => {
    return (
      <Grid
        key={ele.id}
        container
        spacing={0}
        gap={2}
        sx={{
          borderTop: '1px solid #ffffff',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Grid item xs={1}>
          <Typography>{i + 1}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>{ele.name}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{ele.price}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{ele.quantity}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Button variant='contained' color='error'>
            Delete
          </Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid
      item
      xs={6}
      sx={{
        backgroundColor: '#f0f0f0',
        height: 'calc(100vh - 100px)',
        padding: 2,
      }}
    >
      <Typography sx={{ fontSize: 20 }}>Item List</Typography>
      <Grid
        gap={2}
        sx={{
          marginTop: 2,
        }}
      >
        {items.map((item: Item, i: number) => (
          <RenderListItem key={item.id} ele={item} i={i} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ListItem;
