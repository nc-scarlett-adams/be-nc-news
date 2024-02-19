const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const testData = require("../db/data/test-data");

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("404 path not found", () => {
  test("status 404, responds with an error message", () => {
    return request(app)
      .get("/api/topiczzz")
      .expect(404)
      .then(({ body }) => {
        console.log(body);
        expect(body.msg).toBe("invalid endpoint");
      });
  });
});
describe("GET /api/topics", () => {
  test("status 200, responds with an array of topic objects", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then(({ body }) => {
        expect(body.topics).toHaveLength(3);
        body.topics.forEach((topic) => {
          expect(topic).toEqual(
            expect.objectContaining({
              slug: expect.any(String),
              description: expect.any(String),
            })
          );
        });
      });
  });
});
