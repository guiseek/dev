module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'perf', name: 'perf:     Performance improvements' },
    { value: 'revert', name: 'revert:   Reverts a previous commi' },
    {
      value: 'build',
      name:
        'build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'style',
      name:
        'style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name:
        'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'test',
      name: 'test:     Adding missing tests or correcting existing tests',
    },
    {
      value: 'cleanup',
      name:
        'cleanup:  A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'chore',
      name: "chore:    Other changes that don't modify src or test files",
    },
    {
      value: 'ci',
      name:
        'ci:       Changes to our CI configuration files and scripts (example scopes: Github Actions, Travis, Circle, BrowserStack, SauceLabs)',
    },
    {
      value: 'wip',
      name: 'wip:      Work In Progress',
    },
  ],

  scopes: [
    {
      name: 'testing',
      description: 'anything testing specific (e.g., jest or cypress)',
    },
    {
      name: 'repo',
      description: 'anything related to managing the repo itself',
    },
    { name: 'misc', description: 'misc stuff' },
  ],

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject:
      'Write a SHORT, IMPERATIVE (lowercase) description of the change:\n',
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['ticketNumber'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
