import { GetUsersConroller } from './get-users-controller'

describe('GetuserController test ', () => {
  test('Should return 500 code error if param miss', async () => {
    const controllerTest = new GetUsersConroller()

    const payload = {
      body: {
        limit: 50,
      },
    }

    const response = await controllerTest.handle(payload)
    console.log('RESPONSE  ++>', response)

    expect(response.statusCode).toBe(400)
    //expect(response.body).toBe('[MissingParamError: Missing param: offset]')
  })
})
