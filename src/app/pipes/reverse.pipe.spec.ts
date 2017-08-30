import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {

  let pipe: ReversePipe;
  const array = [1, 0];
  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse array', () => {
    const result = pipe.transform(array);
    expect(array.sort()).toEqual(result);
  });

});
