// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
mySidebar: [
    {
      type: 'category',
      label: 'Android',
      items: [{type: 'autogenerated', dirName: 'android'}],
    },
    {
      type: 'category',
      label: 'iOS',
      items: [{type: 'autogenerated', dirName: 'ios'}],
    },
    {
      type: 'category',
      label: 'Unity',
      items: [{type: 'autogenerated', dirName: 'unity'}],
    },
    {
      type: 'category',
      label: 'React Native',
      items: [{type: 'autogenerated', dirName: 'react-native'}],
    },
    {
      type: 'category',
      label: 'Flutter',
      items: [{type: 'autogenerated', dirName: 'flutter'}],
    },
    {
      type: 'category',
      label: 'Product Information',
      items: [{type: 'autogenerated', dirName: 'product'}],
    },

    {
      type: 'category',
      label: 'Best Practices',
      items: [{type: 'autogenerated', dirName: 'best-practices'}],
    },

    {
      type: 'category',
      label: 'Legal',
      items: [
        {
          type: 'doc',
          id: 'dpa',
        },
        {
          type: 'doc',
          id: 'terms-of-service',
        },
        {
          type: 'doc',
          id: 'privacy-policy',
        },
      ],
    },
  ],

/*
  myAutogeneratedSidebar: [
    {
      type: 'autogenerated',
      dirName: '.', // '.' means the current docs folder
    },
  ],
*/
};

module.exports = sidebars;
