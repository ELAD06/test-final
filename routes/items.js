const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const MLClient = require('./utils/client');

/**
 *
 * /vendeli/items/:
 *   GET:
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: q
 *         in: params
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Si el parametro "q" existe y es valido
 *       400:
 *         description: Si el parametro "q" no existe o es invalido
*/
router.get('/', async (req, res, next) => {
  try {
  const { q } = req.query;
  if (!q) {
    const errorMessage = 'El parametro "q"/"query" es invalido o no esta definido, por favor intenta de nuevo';
    throw createError(400, errorMessage);
  }
  const axiosResp = await MLClient.get(`/sites/MLA/search?q=${q}`);
  res.send(axiosResp.data);
  } catch (error) {
    next(error);
  }
});

/**
 *
 * /vendeli/items/:id
 *   GET:
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: params
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Si el parametro ":id" existe y es valido
 *       400:
 *         description: Si el parametro ":id" no existe o es invalido
*/
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      const errorMessage = 'El parametro "ID" es invalido o no esta definido, por favor intenta de nuevo';
      throw createError(400, errorMessage);
    }
    const axiosResp = await MLClient.get(`/items/${id}`);
    res.send(axiosResp.data);
    } catch (error) {
      next(error);
    }
});


module.exports = router;
