const IsAddedToFav = (array, object) => {
  return array && array.some((item) => item?.id === object?.id);
};

export default IsAddedToFav;
