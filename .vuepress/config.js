module.exports = {
  title: "Doc Scaffolding Template",
  description:
    "A documentation template",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  theme: "nebula",
  themeConfig: {
    feedback: {
      title: "Feedback & Support",
      content: "Found a typo? Can't find something? Let us know via Slack or open a Jira issue.",
      slack: [
        {
        channelId: "C6H8K1CAU",
        label: "#doc-support"
      }
    ],
      jira: [
        {
        link: "https://redventures.atlassian.net/projects/RTD/summary",
        label: "Jira Board"
      }
    ]
    },
    nav: [
      { text: "Home", link: "/" }, 
      { text: "Quick Start", link: "/getting-started/" },
      { text: "Doc Types", link: "/types/" },
      { text: "Templates", link: "/templates/"},
      { text: "Doc Standards", link: "https://docs.rvapps.io/teams/doc" },
      { text: "Support", link: "https://redventures.slack.com/archives/C6H8K1CAU" },
    ],
    sidebar: {
      '/getting-started/':[
        '/getting-started'
      ],
      '/types/': [
        '/types/',
        '/types/api-spec'
      ],
      '/templates/': [
        '/templates/',
        '/templates/arch-over-temp',
        '/templates/build-deploy-temp',
        '/templates/business-guide',
        '/templates/dev-guide-temp',
        '/templates/infrastructure-temp',
        '/templates/readme-template',
        '/templates/testing-temp'
      ]
    },
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "RedVentures/repo-name",
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: "Github",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    docsDir: 'docs', //Optional
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Edit this page",
    logo: "/logo-dark.svg" //Optional
  }
};
