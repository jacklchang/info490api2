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

var myCodeMirror = CodeMirror(document.querySelector(".code1"), {
  value: `az ml workspace create -w 'aml-workspace' -g 'aml-resources'`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code2"), {
  value: `pip install azureml-sdk`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code3"), {
  value: `pip install azureml-sdk[notebooks,automl,explain]`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code4"), {
  value: `{
    "subscription_id": "1234567-abcde-890-fgh...",
    "resource_group": "aml-resources",
    "workspace_name": "aml-workspace"
}`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code5"), {
  value: `from azureml.core import Workspace

ws = Workspace.from_config()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code6"), {
  value: `from azureml.core import Workspace

ws = Workspace.get(name='aml-workspace',
                    subscription_id='1234567-abcde-890-fgh...',
                    resource_group='aml-resources')`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code7"), {
  value: `for compute_name in ws.compute_targets:
  compute = ws.compute_targets[compute_name]
  print(compute.name, ":", compute.type)`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code8"), {
  value: `az extension add -n azure-cli-ml`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code9"), {
  value: `az ml computetarget list -g 'aml-resources' -w 'aml-workspace'`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code-10"), {
  value: `# your bash commands here`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code-11"), {
  value: `# your python code here`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code12"), {
  value: `from azureml.core import Experiment

# create an experiment variable
experiment = Experiment(workspace = ws, name = "my-experiment")

# start the experiment
run = experiment.start_logging()

# experiment code goes here

# end the experiment
run.complete()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code13"), {
  value: `from azureml.core import Experiment
import pandas as pd

# Create an Azure ML experiment in your workspace
experiment = Experiment(workspace = ws, name = 'my-experiment')

# Start logging data from the experiment
run = experiment.start_logging()

# load the dataset and count the rows
data = pd.read_csv('data.csv')
row_count = (len(data))

# Log the row count
run.log('observations', row_count)

# Complete the experiment
run.complete()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code14"), {
  value: `from azureml.widgets import RunDetails

RunDetails(run).show()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code15"), {
  value: `import json

# Get logged metrics
metrics = run.get_metrics()
print(json.dumps(metrics, indent=2))`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code16"), {
  value: `{
  "observations": 15000
}`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code17"), {
  value: `run.upload_file(name='outputs/sample.csv', path_or_stream='./sample.csv')`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code18"), {
  value: `import json

files = run.get_file_names()
print(json.dumps(files, indent=2))`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code19"), {
  value: `[
  "outputs/sample.csv"
]`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code20"), {
  value: `[from azureml.core import Run
import pandas as pd
import matplotlib.pyplot as plt
import os

# Get the experiment run context
run = Run.get_context()

# load the diabetes dataset
data = pd.read_csv('data.csv')

# Count the rows and log the result
row_count = (len(data))
run.log('observations', row_count)

# Save a sample of the data
os.makedirs('outputs', exist_ok=True)
data.sample(100).to_csv("outputs/sample.csv", index=False, header=True)

# Complete the run
run.complete()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code21"), {
  value: `from azureml.core import Experiment, RunConfiguration, ScriptRunConfig

# create a new RunConfig object
experiment_run_config = RunConfiguration()

# Create a script config
script_config = ScriptRunConfig(source_directory=experiment_folder, 
                      script='experiment.py',
                      run_config=experiment_run_config) 

# submit the experiment
experiment = Experiment(workspace = ws, name = 'my-experiment')
run = experiment.submit(config=script_config)
run.wait_for_completion(show_output=True)`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});
