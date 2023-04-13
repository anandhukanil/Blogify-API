import request from "supertest";
import app from "../src/app";

describe("Test App", () => {
  it("Request / should return Hello World!", async () => {
    const result = await request(app).get("/").send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe("Hello World");
  });
});