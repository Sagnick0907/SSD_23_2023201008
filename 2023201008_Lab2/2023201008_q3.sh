#!/bin/bash

dirname=$1

cd "$dirname"
grep -F -w "#include" *."cpp"
