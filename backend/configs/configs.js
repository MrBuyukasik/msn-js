module.exports = () => {
    const ipServer = "mrbuyukasik-msnjs.herokuapp.com";
    // const ipServer: "msn-js.herokuapp.com";
    // const ipServer= "localhost:80";

    return {
        ipServer: ipServer,
        client_id: "1e1f069dfd634fb6ac68e462b7e10e92", // Your client id
        client_secret: "875dec3ee1ec426696d5a6e724c7cb99", // Your secret
        redirect_uri: `http://${ipServer}/routes/spotify/callback`, // Your redirect uri
    };
};
