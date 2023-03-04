function validationMiddleware(req, res, next) {
  const { num1, num2 } = req.body;

  if (!num1 || !num2) {
    next({ error: 'num1 and num2 field is required' })
  }

  if (typeof num1 !== 'number' || num1 < 0) {
    next({ error: 'num1 should be number and should be positive' });
  }

  if (typeof num2 !== 'number' || num2 < 0) {
    next({ error: 'num2 should be number and should be positive' });
  }

  next();
}

module.exports = {
  validationMiddleware,
}