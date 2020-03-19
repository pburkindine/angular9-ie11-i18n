module.exports = {
  name: 'ie11-i18n',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ie11-i18n',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
