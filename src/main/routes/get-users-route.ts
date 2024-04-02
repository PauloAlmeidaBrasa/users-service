import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

import { GetUsersConroller } from '../../presentation/controllers/get-users-controller'

export default (router: Router): void => {
  const controller = new GetUsersConroller()
  router.get('/get-users', adaptRoute(controller))
}
