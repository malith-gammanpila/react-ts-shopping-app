import React, { ReactHTMLElement, useRef } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ItemsContainer } from '../containers/items.container';
import Item from '../types/item';

// get and set the items from the container
const AddItem = (): JSX.Element => {
  const { items, setItems } = ItemsContainer.useContainer();

  const nameRef = useRef<HTMLInputElement>(null)!;
  const priceRef = useRef<HTMLInputElement>(null)!;
  const quantityRef = useRef<HTMLInputElement>(null!);

  const handleAddItem = (e: React.MouseEvent): void => {
    // add item to the items array
    const newItem: Item = {
      id: Math.random().toString(36).substr(2, 9),
      name: nameRef.current?.value || '',
      price: parseFloat(priceRef.current?.value || '0'),
      quantity: parseInt(quantityRef.current?.value || '0'),
    };

    if (!newItem.name || !newItem.price || !newItem.quantity) {
      alert('Please fill all fields');
      return;
    }
    setItems([...items, newItem]);
    clearFields();
  };

  const clearFields = (): void => {
    nameRef.current!.value = '';
    priceRef.current!.value = '';
    quantityRef.current!.value = '';
  };

  return (
    <Grid
      item
      gap={2}
      xs={6}
      sx={{
        height: 'calc(100vh - 100px)',
        padding: 2,
      }}
    >
      <Typography fontSize={20}>Add Item</Typography>
      <Grid
        gap={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 500,
          margin: 'auto',
        }}
      >
        <TextField
          inputRef={nameRef}
          fullWidth
          type='text'
          placeholder='Enter item name'
          label='Name'
          required
        />
        <TextField
          inputRef={priceRef}
          fullWidth
          type='text'
          placeholder='Enter item price'
          label='Price'
          required
        />
        <TextField
          inputRef={quantityRef}
          fullWidth
          type='number'
          placeholder='Enter item quantity'
          label='Quantity'
          required
        />
        <Button
          fullWidth
          sx={{ backgroundColor: '#f0f0f0' }}
          onClick={handleAddItem}
        >
          Add Item
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddItem;
