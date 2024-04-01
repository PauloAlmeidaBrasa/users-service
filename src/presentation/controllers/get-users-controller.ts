import { Controller, HttpRequest, HttpResponse, ok } from '../protocols'
import { MissingParamError } from '../protocols/errors/missing-param-error'
import { badRequest } from '../protocols/errors/errors'
//import { HttpRequest } from '../protocols'
//import { BuyUsecase } from "../../domain/usecases/buy-usecase";

export class GetUsersConroller implements Controller {
  //private useCase:any
  //   constructor() {
  //     this.useCase = usecase
  //   }

  // bodyReqValidate(body:Object) {
  //   console.log(body)
  //   for (let properties in body) {
  //     console.log(body[properties])
  //     if(!body[properties]) {
  //       throw new Error
  //     }
  //   }

  // }
  validLimitAndOffset(req: HttpRequest) {
    console.log()
    if (!req.body.limit) {
      throw badRequest(new MissingParamError('offset'))
    }
    if (!req.body.offset) {
      throw badRequest(new MissingParamError('offset'))
    }
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      this.validLimitAndOffset(httpRequest)
      return ok('usecaseReturn')
    } catch (error) {
      return error
    }
  }
}
