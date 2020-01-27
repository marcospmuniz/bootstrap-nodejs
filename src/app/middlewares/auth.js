import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided!' });
  }

  // pega apenas o token que veio no header, dispresa a palavra Bearer
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.private_key);
    // se conseguiu fazer o decode do token, o usuário está autenticado

    // inclui o ID do usuário autenticado no conteúdo de toda requisição autenticada
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid!' });
  }
};
