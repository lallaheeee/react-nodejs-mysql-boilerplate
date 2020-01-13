const preloadHandler = (req, res, next) => {
  next();
};

const postHandler = (_, res) => {
  res.send('this is postHandler!');
};

const getHandler = (_, res) => {
  res.send('this is getHandler!');
};

const putHandler = (_, res) => {
  res.send('this is putHandler!');
};

const deleteHandler = (_, res) => {
  res.send('this is deleteHandler!');
};

export {
  preloadHandler,
  postHandler,
  getHandler,
  putHandler,
  deleteHandler,
};
