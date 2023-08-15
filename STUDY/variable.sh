#!/bin/bash

FIRST_NAME=Sagnick
SECOND_NAME=Bhar
echo Hello $FIRST_NAME $SECOND_NAME

LIST=(one two three four five)
echo ${LIST[@]} #print all elements
echo ${LIST[1]}	#print index 1 element


#for loop
# echo -n to ingore newline char
#print the length of all items in array
for item in ${LIST[@]}; do echo -n $item | wc -c; done