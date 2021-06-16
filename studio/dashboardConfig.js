export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ca499bc54d8e18b4d23ee7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-radab2xf',
                  apiId: '2c81d284-0084-4ed0-b965-c58e421ff634'
                },
                {
                  buildHookId: '60ca499bc2078e487ee88d7a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1geb5o7n',
                  apiId: 'b10aec02-e9c5-4af8-b6c9-52bb9a94871f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leggsimon/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1geb5o7n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
