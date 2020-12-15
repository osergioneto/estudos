const { deleteUser, findUser } = require('./users');

describe('users', () => {
  test('find user', async () => {
    const foundUser = await findUser(1);

    expect(foundUser.id).toBe(1);
    expect(foundUser.email).toBe('readycoder1@gmail.com');
  });

  test('throw when user dont exist', async () => {
    await expect(findUser(30)).rejects.toThrow(`No user with id "30"`);
  });

  test('delete user', async () => {
    const deletedUser = await deleteUser(5);

    expect(deletedUser.id).toBe(5);
  });

  test('throw when delete user that doesnt exits', async () => {
    await expect(deleteUser(30)).rejects.toThrow(`No user with id "30"`);
  });
})