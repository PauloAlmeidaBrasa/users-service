import { GetUsersConroller } from './get-users-controller'

describe('GetuserController test ', () => {
  test('Should return the correct error message for missing param', async () => {
    const controllerTest = new GetUsersConroller()

    const payload = {
      body: {
        limit: 50, // intentionally missing offset
      },
    }

    const response = await controllerTest.handle(payload)
    console.log(
      '   d s ss s sd d sd WD wV RDCF   asd  w das WD  WDDSVF  c',
      response.body
    )

    expect(response.body).toBe(`Missing param: offset`)
  })
  // test('Should return 500 code error if param miss', async () => {
  //   const controllerTest = new GetUsersConroller()

  //   const payload = {
  //     body: {
  //       limit: 50,
  //     },
  //   }

  //   const response = await controllerTest.handle(payload)
  //   console.log('RESPONSE  ++>', response)

  //   expect(response.statusCode).toBe(400)
  //   expect(response.body).toBe('MissingParamError: Missing param: offset')
  // test('Should return the correct error message for missing param', async () => {
  //   const controllerTest = new GetUsersConroller()

  //   const payload = {
  //     body: {
  //       limit: 50, // intentionally missing offset
  //     },
  //   }

  //   const response = await controllerTest.handle(payload)

  //   expect(response.body.message).toBe('MissingParamError: Missing param: offset')
  // })
  // })
})
