import { Controller, HttpResponse, ok } from '../protocols'
import { HttpRequest } from '../protocols'
//import { BuyUsecase } from "../../domain/usecases/buy-usecase";

export class GetUsersConroller implements Controller {
  //private useCase:any
  //   constructor(usecase:BuyUsecase) {
  //     this.useCase = usecase
  //   }

  // bodyReqValidate(body:Object) {
  //   for (let properties in body) {
  //     if(!body[properties]) {
  //       throw new Error
  //     }
  //   }

  // }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

   
    // const { offset, limit } = httpRequest.body

    //httpRequest: HttpRequest
    //this.bodyReqValidate(httpRequest.body)
    //const usecaseReturn = await this.useCase.handle(httpRequest)
    return ok('usecaseReturn')
  }
}
