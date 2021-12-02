let connection;
const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    connection.write("Say: This is Leshan")
    if (data === 'w') {
      console.log("Move: up");
      connection.write("Move: up");
    }
    if (data === 'a') {
      console.log("Move: left");
      connection.write("Move: left");
    }
    if (data === 's') {
      console.log("Move: down");
      connection.write("Move: down");
    }
    if (data === 'd') {
      console.log("Move: right");
      connection.write("Move: right");
    }
  });
  return stdin;
};

module.exports = {setupInput}