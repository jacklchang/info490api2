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
  value: `# your bash commands here\n`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code-11"), {
  value: `# your python code here\n`,
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

var myCodeMirror = CodeMirror(document.querySelector(".code22"), {
  value: `pip install --upgrade azureml-sdk[notebooks,automl,explain]`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code23"), {
  value: `cd Users
git clone https://github.com/microsoftdocs/mslearn-aml-labs`,
  mode: "powershell",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code24"), {
  value: `import azureml.core
print("Ready to use Azure ML", azureml.core.VERSION)`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code25"), {
  value: `from azureml.core import Workspace

ws = Workspace.from_config()
print(ws.name, "loaded")`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code26"), {
  value: `from azureml.core import Experiment
import pandas as pd
import matplotlib.pyplot as plt
%matplotlib inline 

# Create an Azure ML experiment in your workspace
experiment = Experiment(workspace = ws, name = "diabetes-experiment")

# Start logging data from the experiment
run = experiment.start_logging()
print("Starting experiment:", experiment.name)

# load the data from a local file
data = pd.read_csv('data/diabetes.csv')

# Count the rows and log the result
row_count = (len(data))
run.log('observations', row_count)
print('Analyzing {} rows of data'.format(row_count))

# Plot and log the count of diabetic vs non-diabetic patients
diabetic_counts = data['Diabetic'].value_counts()
fig = plt.figure(figsize=(6,6))
ax = fig.gca()    
diabetic_counts.plot.bar(ax = ax) 
ax.set_title('Patients with Diabetes') 
ax.set_xlabel('Diagnosis') 
ax.set_ylabel('Patients')
plt.show()
run.log_image(name = 'label distribution', plot = fig)

# log distinct pregnancy counts
pregnancies = data.Pregnancies.unique()
run.log_list('pregnancy categories', pregnancies)

# Log summary statistics for numeric columns
med_columns = ['PlasmaGlucose', 'DiastolicBloodPressure', 'TricepsThickness', 'SerumInsulin', 'BMI']
summary_stats = data[med_columns].describe().to_dict()
for col in summary_stats:
    keys = list(summary_stats[col].keys())
    values = list(summary_stats[col].values())
    for index in range(len(keys)):
        run.log_row(col, stat = keys[index], value = values[index])
        
# Save a sample of the data and upload it to the experiment output
data.sample(100).to_csv('sample.csv', index=False, header=True)
run.upload_file(name = 'outputs/sample.csv', path_or_stream = './sample.csv')

# Complete the run
run.complete()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code27"), {
  value: `import json

# Get run details
details = run.get_details()
print(details)

# Get logged metrics
metrics = run.get_metrics()
print(json.dumps(metrics, indent=2))

# Get output files
files = run.get_file_names()
print(json.dumps(files, indent=2))`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code28"), {
  value: `from azureml.widgets import RunDetails

RunDetails(run).show()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code29"), {
  value: `import os, shutil

# Create a folder for the experiment files
folder_name = 'diabetes-experiment-files'
experiment_folder = './' + folder_name
os.makedirs(folder_name, exist_ok=True)

# Copy the data file into the experiment folder
shutil.copy('data/diabetes.csv', os.path.join(folder_name, "diabetes.csv"))`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code30"), {
  value: `%%writefile $folder_name/diabetes_experiment.py
from azureml.core import Run
import pandas as pd
import os

# Get the experiment run context
run = Run.get_context()

# load the diabetes dataset
data = pd.read_csv('diabetes.csv')

# Count the rows and log the result
row_count = (len(data))
run.log('observations', row_count)
print('Analyzing {} rows of data'.format(row_count))

# Count and log the label counts
diabetic_counts = data['Diabetic'].value_counts()
print(diabetic_counts)
for k, v in diabetic_counts.items():
    run.log('Label:' + str(k), v)
      
# Save a sample of the data in the outputs folder (which gets uploaded automatically)
os.makedirs('outputs', exist_ok=True)
data.sample(100).to_csv("outputs/sample.csv", index=False, header=True)

# Complete the run
run.complete()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code31"), {
  value: `import os
import sys
from azureml.core import Experiment, RunConfiguration, ScriptRunConfig
from azureml.widgets import RunDetails

# create a new RunConfig object
experiment_run_config = RunConfiguration()

# Create a script config
src = ScriptRunConfig(source_directory=experiment_folder, 
                      script='diabetes_experiment.py',
                      run_config=experiment_run_config) 

# submit the experiment
experiment = Experiment(workspace = ws, name = 'diabetes-experiment')
run = experiment.submit(config=src)
RunDetails(run).show()
run.wait_for_completion()`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code32"), {
  value: `# Get logged metrics
metrics = run.get_metrics()
for key in metrics.keys():
        print(key, metrics.get(key))
print('\n')
for file in run.get_file_names():
    print(file)`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});

var myCodeMirror = CodeMirror(document.querySelector(".code33"), {
  value: `from azureml.core import Experiment, Run

diabetes_experiment = ws.experiments['diabetes-experiment']
for logged_run in diabetes_experiment.get_runs():
    print('Run ID:', logged_run.id)
    metrics = logged_run.get_metrics()
    for key in metrics.keys():
        print('-', key, metrics.get(key))`,
  mode: "python",
  theme: "pastel-on-dark",
  lineNumbers: true,
  readOnly: true,
});