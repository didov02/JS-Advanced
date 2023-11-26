function myExpress() {
    const router = {
        routeHandlerMap: {
            //"test" : {[method] : handler}
        },
        handleRouter(url, req, res) {
            const routeHandlerMap = router.routeHandlerMap[url];
            const method = req.method;
            const methodHandler = routeHandlerMap[method];
            if(!methodHandler) {
                res.writeHead(404);
                res.end();
                return;
            }
        }
    }

    const server = http.createServer((req, res) => {
        const url = req.url;
        router.handleRouter(url, req, res);
    });

    return {
        get(route, handler) {
            const routeHandlerMap = router.routeHandlerMap[route] || {};
            routeHandlerMap['GET'] = handler;
            router.routeHandlerMap[route] = routeHandlerMap
        },
        get(route, handler) {
            const routeHandlerMap = router.routeHandlerMap[route] || {};
            routeHandlerMap['POST'] = handler;
            router.routeHandlerMap[route] = routeHandlerMap
        },
        get(route, handler) {
            const routeHandlerMap = router.routeHandlerMap[route] || {};
            routeHandlerMap['PUT'] = handler;
            router.routeHandlerMap[route] = routeHandlerMap
        },
        get(route, handler) {
            const routeHandlerMap = router.routeHandlerMap[route] || {};
            routeHandlerMap['DELETE'] = handler;
            router.routeHandlerMap[route] = routeHandlerMap
        },
        listen(port, cb) {
            server.listen(port, cb);
        }
    }
}

//module.exports = myExpress;

const app = myExpress();

app.get('/test', function(req, res) { // -> Get all users
    console.log("in handler");
    res.write("Hello, world!")
});

app.get("/user/:id", function(req, res) { // -> Get single user
    const name = "Ivan"; //req.params.name
    res.write("Hello" + name);
});

app.post("/user", function(req, res) { // -> Create new user

});

app.patch("/user/:id", function(req, res) { // -> Update user -- partial change

});


app.delete("/user/:id", function(req, res) { // -> Delete user

});

app.put("/user/:id", function(req, res) { // -> Update user -- full change

});

app.get("/user/:id/post/:postId", function(req, res) { // -> Get single user
    const id = "ivanId"; //req.params.name
    const postId = "postId"; // req.params.name
    res.write("Hello user" + id + "; post " + postId);
});

const port = 8080;
app.listen(port, function() {
    console.log(port);
})