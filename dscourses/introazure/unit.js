var myCodeMirror = CodeMirror(document.querySelector('.code'), {
    value: "# Enter your code here \n",
    mode:  "python",
    theme: "pastel-on-dark",
    lineNumbers: true
  });