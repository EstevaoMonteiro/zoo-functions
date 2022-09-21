const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento "count" deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toMatchObject([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5;', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('retorna a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toMatchObject([
      'Friday',
      'Saturday',
      'Sunday',
      'Tuesday',
    ]);
  });
  it('retorna undefined caso não haja parâmetro na função', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Passando por argumento um objeto vazio ({}) deve retornar a string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toEqual(
      'Parâmetro inválido, é necessário uma string',
    );
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('')).toBe(null);
  });
});
