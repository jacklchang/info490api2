var myCodeMirror = CodeMirror(document.querySelector(".code"), {
  value: `from azureml.core import Workspace
    
ws = Workspace.create(name='aml-workspace',
                  subscription_id='123456-abc-123...',
                  resource_group='aml-resources',
                  create_resource_group=True,
                  location='eastus',
                  sku='enterprise'
                )`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code1'), {
  value: `az ml workspace create -w 'aml-workspace' -g 'aml-resources'`,
  mode:  "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code2'), {
  value: `pip install azureml-sdk`,
  mode:  "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code3'), {
  value: `pip install azureml-sdk[notebooks,automl,explain]`,
  mode:  "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code4'), {
  value: `{
    "subscription_id": "1234567-abcde-890-fgh...",
    "resource_group": "aml-resources",
    "workspace_name": "aml-workspace"
}`,
  mode:  "javascript",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code5'), {
  value: `from azureml.core import Workspace

ws = Workspace.from_config()`,
  mode:  "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code6'), {
  value: `from azureml.core import Workspace

ws = Workspace.get(name='aml-workspace',
                    subscription_id='1234567-abcde-890-fgh...',
                    resource_group='aml-resources')`,
  mode:  "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code7'), {
  value: `for compute_name in ws.compute_targets:
  compute = ws.compute_targets[compute_name]
  print(compute.name, ":", compute.type)`,
  mode:  "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code8'), {
  value: `az extension add -n azure-cli-ml`,
  mode:  "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code9'), {
  value: `az ml computetarget list -g 'aml-resources' -w 'aml-workspace'`,
  mode:  "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code-10'), {
  value: `# your bash commands here`,
  mode:  "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
});

var myCodeMirror = CodeMirror(document.querySelector('.code-11'), {
  value: `# your python code here`,
  mode:  "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
});