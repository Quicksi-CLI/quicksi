/**
 *
 * @param {*} req
 * @param {*} res
 */
export const getHealth = (req, res) => {
  res.json({ health: 'OK' });
};
