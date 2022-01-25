const IsAddedToFav = (array, object) => {
  return array.some((item) => item?.id === object?.id);
};

export default IsAddedToFav;
