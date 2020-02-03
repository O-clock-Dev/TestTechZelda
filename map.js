const map = {
  tiles: [
    '++++++++++++++++++++++++++++++++++++++++',
    '++++++++++++++++++++++++++++++++++++++++',
    '+++++    ++    ++    +++++++++++++++++++',
    '+++++ $  ++ ++ ++ ++  ++++++++++++++++++',
    '+++++       ++    ++  ++++++++++++++++++',
    '++++++++++++++++++++   +++++++++++++++++',
    '+++++++++++++++++++    +++++++++++++++++',
    '++++++++++++++++++       +++++++++++++++',
    '+++++++++   ++++            ++++++++++++',
    '+++++++             +++++++  +++++++++++',
    '+++++    +++      +++++++++   ++++++++++',
    '+++    +++++++++++++++++++            ++',
    '++    +++++++++++++        ++++++     ++',
    '++   +++++++++++++ xxx xx  ++++++    +++',
    '++   ++    +++++++ xxxxxx +++++++   ++++',
    '++      xx   ++++   xxxx ++++++   ++++++',
    '++      xx   +++++++    ++++++    ++++++',
    '++++++++    ++++++++    ++++++++     +++',
    '++++++++    ++             ++++++       ',
    '++++++++       xxxx        ++++++       ',
    '+++++++      xxxxxxx       ++++++    +++',
    '++++++++     xxxxxxx       +++++   +++++',
    '+++++++++++    xxxx         +++   ++++++',
    '++++++++++++++      +++++       ++++++++',
    '+++++++++++++++    ++++++++    +++++++++',
    '++++    +++++++    +++++++++++++++++++++',
    '+++       +++++    +++++++++++++++++++++',
    '++  ++++           +++++++++++++++++++++',
    '++  ++++++++++++++++++++++++++++++++++++',
    '++  ++++++++++++++++++++++++++++++++++++',
  ],

  types: {
    '+': 'bush',
    ' ': 'soil',
    '$': 'stone',
    'x': 'mud',
  },

  startPosition: {
    posX: 2,
    posY: 29,
  }
};
