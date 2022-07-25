/**
 * SocketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  Hello: function (req, res) {
    
    if (!req.isSocket) {
      return res.badRequest("Only a client socket can sub to this");
    }
    //console.log(req);
    console.log(req.body)
    console.log(sails.sockets.getId(req));
    sails.sockets.join(req, "funSockets");
    
  //   Data={
  //     msgs:[
  //     {msg:
  //   req.body.message,
  //   id:sails.sockets.getId(req),
  //     }
  //   ]
  // }
  Data = {
    msg: req.body.message,
    id: sails.sockets.getId(req)
  }
    // Data.msgs[0].msg
    sails.sockets
    sails.sockets.broadcast("funSockets", "hello", Data);

    return res.json({
      anyData: "we want to send back",
    });
  },
};
