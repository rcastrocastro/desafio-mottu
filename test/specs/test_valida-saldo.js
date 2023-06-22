const HomeScreen = require('../screenObjects/home.screen');

describe('Validar Saldo', () => {
  it('Saldo da Conta', async () => {
    await HomeScreen.componenteEyes.click();
    await expect(HomeScreen.componenteSaldo).toHaveText('R$ 5.500,00');
  });
});
