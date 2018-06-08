import {Color} from '../lib/utils';
import { expect } from 'chai';

describe('word parser', () => {
  it('initializes', () => {
    const color = new Color(0, 0, 0);
    expect(color.red).to.equal(0);
    expect(color.green).to.equal(0);
    expect(color.blue).to.equal(0);
    expect(color.rgb).to.equal('000000');
  });

  it('test rgb', () => {
    const white = new Color(255, 255, 255);
    expect(white.rgb).to.equal('FFFFFF');
  });
});
