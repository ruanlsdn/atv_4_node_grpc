setInterval(() => {
  const grpc = require("@grpc/grpc-js");
  const protoLoader = require("@grpc/proto-loader");
  const path = require("path");
  const protoobject = protoLoader.loadSync(
    path.resolve(__dirname, "../../grpc/todo.proto")
  );
  const TodoClient = grpc.loadPackageDefinition(protoobject);
  const client = new TodoClient.TodoService(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );
  client.list({}, (err, notes) => {
    if (err) throw err;
    console.log(notes);
  });
}, 5000);
