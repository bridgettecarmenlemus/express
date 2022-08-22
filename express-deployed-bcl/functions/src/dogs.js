export function getDogs(req, res) {
  res.send([
    { name: "Ryder", age: 4, breed: "Dumbass", gender: "MN" },
    { name: "Duke", age: 2, breed: "Rottwiller", gender: "M" },
  ]);
}

export function testApi(req, res) {
  res.send({ success: true, message: "API IS WORKING" });
}
