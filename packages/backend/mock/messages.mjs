import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

function createMessages() {
  const mockMessages = [];
  for (let i = 1; i <= 50; i++) {
    // generate random id 1 or 2
    const id = uuidv4();
    const userId = faker.datatype.number({ min: 1, max: 2 });
    const userName = faker.name.fullName();
    const message = faker.lorem.sentence();
    const createdAt = faker.date
      .between("2021-01-01", "2023-04-19")
      .toISOString();
    const status = "success";

    const mockMessage = { id, userId, userName, message, createdAt, status };
    mockMessages.push(mockMessage);
  }
  return mockMessages;
}

export default createMessages;
