import signup from "../pages/SignupPage";

describe("home page", () => {
  it("App must be online", function () {
    signup.go();
  });
});
