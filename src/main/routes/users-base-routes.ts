import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

import { UserBaseController } from '../../presentation/controllers/user-base-controller'

export default (router: Router): void => {
  const controller = new UserBaseController()
  router.get('/get-users', adaptRoute(controller))
}
