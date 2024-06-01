import React, { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import Item from '../types/item';

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const list: string | null = localStorage.getItem('items');
    if (list) {
      setItems(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    items && localStorage.setItem('items', JSON.stringify(items));

    return () => {
      localStorage.removeItem('items');
    };
  }, [items]);

  return { items, setItems };
};

export const ItemsContainer = createContainer(useItems);
