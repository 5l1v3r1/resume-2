// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAxyr7eHJxfWCiU4n2bXJB86hipyHow0q8',
    authDomain: 'steven-harris-resume.firebaseapp.com',
    databaseURL: 'https://steven-harris-resume.firebaseio.com',
    projectId: 'steven-harris-resume',
    storageBucket: 'steven-harris-resume.appspot.com',
    messagingSenderId: '543213305210'
  }
};
