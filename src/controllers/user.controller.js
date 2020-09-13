import HttpStatus from 'http-status-code';
import User from '../models/user.model.js';

export function findAll(req, res) {
  User.forge()
    .fetchAll()
    .then((user) => {
      res.json({ error: false, data: user.toJSON() });
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err })
    );
}

export function createUser(req, res) {
  const { name, surname, email, password, role, shop_id } = req.body;
  User.forge({ name, surname, email, password, role, shop_id })
    .save()
    .then((user) =>
      res.json({
        success: true,
        data: user.toJSON(),
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

export function editUser(req, res) {
  const { id, name, surname, email, password, role, shop_id } = req.body;
  User.forge({ id, name, surname, email, password, role, shop_id })
    .save()
    .then((user) =>
      res.json({
        success: true,
        data: user.toJSON(),
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}
export function deleteUser(req, res) {
  User.forge({ id: req.params.id })
    .fetch({ require: true })
    .then((user) =>
      user
        .destroy()
        .then(() =>
          res.json({
            error: false,
            data: { message: 'User deleted successfully.' },
          })
        )
        .catch((err) =>
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: true,
            data: { message: err.message },
          })
        )
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}

export function findUser(req, res) {
  User.forge({ id: req.params.id })
    .fetch()
    .then((user) => {
      if (!user) {
        res.status(HttpStatus.NOT_FOUND).json({
          error: true,
          data: {},
        });
      } else {
        res.json({
          error: false,
          data: user.toJSON(),
        });
      }
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err,
      })
    );
}
