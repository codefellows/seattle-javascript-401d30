# Environments

Your system has many operating environments.  Node is just one of them.

 - Your shell (usually "bash")
 - bc (calculator)
 - perl
 - php
 - python
 - node
 
All of these allow you to enter an environment that has a prompt, where you can run code inline and get some output **AND** call on the interpreter from the commandline with a file name.

That starts up the app (node/php/whatever), reads in the file, compiles it, runs it, and then exits.

In the case of node, it opens such an environment and compiles and runs your JS code using the V8 Javascript Engine.