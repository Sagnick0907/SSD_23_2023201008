#!/bin/bash

dirname=$1

cd "$dirname"
#grep -F -w "#include" *."cpp"

ls -l | grep '^-rwx-w---x*\|^-rwx-w-r-x*\|^-rwx-w--wx*\|^-rwx-w-rwx*\|^-rwx-----x*\|^-rwx---r-x*\|^-rwx----wx*\|^-rwx---rwx*\|^drwx-w---x*\|^drwx-w-r-x*\|^drwx-w--wx*\|^drwx-w-rwx*\|^drwx-----x*\|^drwx---r-x*\|^drwx----wx*\|^drwx---rwx*'