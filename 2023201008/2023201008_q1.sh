#!/bin/bash

filename="$1"

a=$((dort $filename | (wc -l) ))
b=2
c=1
t=$(((expr $a/$b)+$c))
line=$(head -n $t $filename | tail -n 1)
