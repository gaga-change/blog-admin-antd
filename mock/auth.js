
export default {
  // 支持值为 Object 和 Array
  'GET /api/auth/current': {
    _id: '00000001',
    username: 'gaga_change',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    email: 'antdesign@alipay.com',
  },
  'POST /api/auth/login': (req, res) => {
    const { password, username } = req.body;

    if (password === 'gaga' && username === 'gaga') {
      res.send({
        _id: '123421',
        usename: 'gaga',
      });
      return;
    }

    res.status(400).send({
      message: '账号密码错误！',
    });
  },
};
