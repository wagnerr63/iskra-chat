
const Message = require('../models/Message');

class MessageController {
  async index(request, response) {
    const messages = await Message.findAll();

    return response.json(messages);
  }

  // Error Handler (Middleware do Express)

  async store(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
        return response.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
        return response.status(400).json({ error: 'E-mail is required' });
    }

    if (!password) {
        return response.status(400).json({ error: 'Password is required' });
    }

    const userByEmail = await User.findOne({ where: {email}});
    if (userByEmail) {
        return response.status(400).json({ error: 'This e-mail is already in use' });
    } 

    let passwordMD5 = md5(password);

    const user = await User.create({ name, email, password: passwordMD5 });

    return response.json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const userExists = await User.findByPk(id);
    if (!userExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
        return response.status(400).json({ error: 'Name is required' });
    }

    if (!email) {
        return response.status(400).json({ error: 'E-mail is required' });
    }

    if (!password) {
        return response.status(400).json({ error: 'Password is required' });
    }

    const userByEmail = await User.findOne({ where: {email}});
    if (userByEmail && userByEmail.id != id) {
        return response.status(400).json({ error: 'This e-mail is already in use' });
    }
    
    let passwordMD5 = md5(password); 

    const user = await User.update({ name, email, password: passwordMD5 },{ where: {id}} );
    response.json(user);

  }

  async delete(request, response) {
    const { id } = request.params;

    await User.destroy({ where: {id} });
    // 204: No content
    response.sendStatus(204);
  }
}

module.exports = new MessageController();