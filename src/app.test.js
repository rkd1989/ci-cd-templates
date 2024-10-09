const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("Test endpoint responses", () => {
  it("gets the test endpoint", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello Worlddddddd");
  });
});
// Run the test with the following command:
// npm test
// PASS  src/app.test.js
// Test endpoint responses
//   √ gets the test endpoint (67 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.335 s
