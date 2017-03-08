import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('series info replaces old series info', (assert) => {
  // should seriesInfo be an array?
  // NO IT SHOULD BE AN OBJ BECAUSE ITS JUST ONE SERIES!

    const oldState = { seriesInfo: { name: 'spongebob', date: '1939' } };
    const actionOne = { type: 'SERIES_INFO@LOAD', data: { name: 'spiderman', date: '1631' } };

    assert.ok(true);
    assert.deepEqual(reducer(oldState, actionOne), { seriesInfo: { name: 'spiderman', date: '1631' } });
  });

  test('character data replaces the old character data', (assert) => {
    const oldState = { characters: ['Hulk', 'Flash'] };
    const actionTwo = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: ['Dogboy', 'Chapstickman']  };

    assert.ok(true);
    assert.deepEqual(reducer(oldState, actionTwo), { characters: ['Dogboy', 'Chapstickman'] });
  });
});
