const request = require("supertest");
const app = require("../index");
let server;

beforeAll(() => {
  server = app.listen(0);
});

afterAll((done) => {
  server.close(done);
});

describe("Home page content", () => {
  it('should return "Sample Jira App"', async () => {
    const response = await request(server).get("/");
    expect(response.text).toBe("Sample Jira App");
  });
});
