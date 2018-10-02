# E-Bills System Task
#zaidd
Please follow the following instruction to implement the E-Bills system

1. Please use Angular 5 as SPA framework, SASS as stylesheet preprocessor.
1. Your code should be submitted as a pull request to this repository.

## System Requirements
The main goal of the system is to allow you to pay your monthly bills online, have the following features:

  - Display available agents, for now, start with: Hadara, Mada, Paltel and Jawwal.
  - Be able to pay a bill for each one of the agents.
  - The system will list the main agents on the home page, showing your current balance on the top. the list of squares should represent the list of the agents, clicking on the agent will take you to the pay-to-agent page, in that page, you'll have a form for payment.
  - Your code should consider reusability so that adding new agent should be easy.
  - The UI should be responsive (using Bootstrap4)

## UI
Please use the following as the design for the system on mobile, each square should contain an agent.

![ui](https://image.ibb.co/m4Tae9/ebills.png)

For Desktop, please follow the same design, but make it full-width, so that the number of the agents on one line will fit the width of the screen.

You have the freedom to design the pay-to-agent page but to follow the same theme.


## APIs

- Get Balance API: http://demo3825547.mockable.io/ebills/my-balance

Sample Response:
```
{
balance: "1450"
}
```

- Get Agents: [GET] http://demo3825547.mockable.io/ebills/get_agents
Sample Response:
```
[
  {
    id: 1,
    name: "Hadara"
  },
  
  {
    id: 2,
    name: "Mada"
  },
  
  {
    id: 3,
    name: "Jawwal
  },
  {
    id: 4,
    name: "Paltel"
  },
]
```

- Pay to Agent: [POST] http://demo3825547.mockable.io/ebills/pay/
The api is a mock and will always return success. Please do client side validation.


## Note
Each agent payment form should be different from the other one, please suggest a suitable form for each one.
