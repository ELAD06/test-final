const fillItemObject = (itemData, descData) => {
  return {
    author: {
      name: 'Elifer',
      lastname: 'Aponte' 
    },
    item: {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: itemData.price,
        decimals: 0
      }
    },
    picture: itemData.pictures[0].secure_url || itemData.thumbnail,
    condition: itemData.condition,
    free_shipping: itemData.shipping.free_shipping,
    sold_quantity: itemData.sold_quantity,
    description: descData ? descData.plain_text : 'Sin decripcion del producto',
    permalink: itemData.permalink
  }
}

const fillSearchObject = (itemData) => {
  return {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: itemData.price,
      decimals: 0
    },
    picture: itemData.thumbnail,
    condition: itemData.condition,
    free_shipping: itemData.shipping.free_shipping
  }
}

const parseItems = (data) => {
  const items = [];
  const categories = [];
  data.results.map((result) => {
    const itemResult = fillSearchObject(result);
    return items.push(itemResult);
  });
  
  if(data.filters.length) {
    data.filters.map(filter => {
      if(filter.id === 'category') {
        return filter.values.map(filterValue => categories.push(filterValue.name));
      }
      return;
    });
  }

  if(data.available_filters.length) {
    data.available_filters.map(filter => {
      if(filter.id === 'category') {
        return filter.values.map(filterValue => categories.push(filterValue.name));
      }
      return;
    });
  }
  
  const results = {
    author: {
      name: 'Elifer',
      lastname: 'Aponte' 
    },
    categories,
    items
  }
  return results;
}

const parseResult = (data, descData) => {
  return fillItemObject(data, descData);
}

module.exports = {
  parseResult,
  parseItems
};
