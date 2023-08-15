#!/bin/bash

up="global"
showuptime(){
	local up=$( uptime -p | cut -c4- )
	local since=$( uptime -s )
	cat<<EOF
----
This machine has been up for ${up}
It has been running since ${since}
----
EOF
}

showname(){
	echo Hello $1
}
showuptime
showname Sagnick