export const requestTime  = (req, res,  next) => {
  req.requestTime = Date.now();
  next()
}

export const logger = (req, res,  next) => {
  console.log(req.requestTime)
  next()
}