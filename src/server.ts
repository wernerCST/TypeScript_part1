import app from './app';

const server = app.listen(app.get("port"), () => {
    console.log(
        "App is currently running on http://localhost:%d in %d node",
        app.get("port"),
        app.get("env")
    );
});

export default server;