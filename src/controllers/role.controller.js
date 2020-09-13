import HttpStatus from 'http-status-code';
import Role from '../models/role.model.js';

/**
 * Find all roles
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
  Role.forge()
    .fetchAll()
    .then((role) =>
      res.json({
        error: false,
        data: role.toJSON(),
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}
