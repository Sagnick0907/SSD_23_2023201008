#!/bin/bash

dirname="$1"

ls $dirname | grep -i "^F" | grep -v "cpp"
