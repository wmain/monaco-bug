import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return './json.worker.js';
    }
    if (label === 'css') {
      return './css.worker.js';
    }
    if (label === 'html') {
      return './html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.js';
    }
    return './editor.worker.js';
  },
};

function initializeMonaco() {
  const jsonCode = JSON.stringify({ relative: { bar: "baz" } }, null, 4);

  const modelUri = monaco.Uri.parse('a://b/foo.json'); // a made up unique URI for our model
  const model = monaco.editor.createModel(jsonCode, 'json', modelUri);


  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    enableSchemaRequest: true,
    schemas: [{
      uri: 'http://myserver/foo-schema.json',
      fileMatch: [modelUri.toString()],
      schema: {
        additionalProperties: false,
        type: 'object',
        properties: {
          relative: {
            $ref: 'relative.json',
          }
        }
      }
    }]
  });

  monaco.editor.create(document.getElementById('monaco'), {
    model: model
  });
}

initializeMonaco();