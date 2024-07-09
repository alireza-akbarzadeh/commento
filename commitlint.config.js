//-----------------------------------------------------------------------------------------------------------------------------------------------------
// build: Changes that affect the build system or external dependencies
// chore: used for miscellaneous changes that don't affect the main codebase(configuring development tools, setting up project-specific settings)
// ci: Changes to our CI configuration files and scripts
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// translation: Changes related to translations or language localization. This includes adding or updating translations in the codebase.
// security: Changes that address security vulnerabilities, implement security measures, or enhance the overall security of the codebase.
// -----------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(.*?)\] - (.*?):(.*),\s*jira_id:\s*#(\d+)/,
      headerCorrespondence: ['platform', 'type', 'subject', 'jira_id'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { platform, type, subject, jira_id } = parsed;
          if (
            platform === null &&
            type === null &&
            subject === null &&
            jira_id === null
          ) {
            return [
              false,
              "\x1b[31mERROR\x1b[0m: Please follow the format '[cloud] - [chore] subject, rm_id:#RM_ID'",
            ];
          }
          return [true, ''];
        },
        'gitmoji-type-enum': (parsed, _when, expectedValue) => {
          const platformType = ['Cloud', 'Development', 'QA']; //change your platforms here
          const { type, platform } = parsed;
          if (type && !expectedValue.includes(type)) {
            return [
              false,
              `\x1b[31mERROR\x1b[0m: [${type}] doesn't include in [${expectedValue}]`,
            ];
          }
          if (platform && !platformType.includes(platform)) {
            return [
              false,
              `\x1b[31mERROR\x1b[0m: [${platform}] doesn't include in [${platformType}]`,
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'gitmoji-type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feature',
        'bugfix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
      ],
    ],
    'subject-empty': [2, 'never'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'footer-empty': [2, 'always'],
  },
};
