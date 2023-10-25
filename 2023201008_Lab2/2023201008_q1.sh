#!/bin/bash

read n
read str
inparray=($str)

for a in "${inparray[@]}"
do
  	if [ `expr $a % 2` == 1 ]
  	then
  		k=`expr 2 \* $a - 2`
		for (( i=0 ; i<$a ; i++ )); 
		do
		    for (( j=0 ; j<$k ; j++ )); 
		    do
			echo -n " "
		    done
		    x=`expr $k - 1`
		    k=$x
		    for (( j=0 ; j<$(($i+1)) ; j++ )); 
		    do
			echo -n "* "
		    done
		    echo 
		done
		x=`expr $a - 2`
		k=$x
		for (( i=$a ; i>-1 ; i-- )); 
		do
		    for (( j=$k ; j>=1 ; j-- )); 
		    do
			echo -n " "
		    done
		    x=`expr $k + 1`
		    k=$x
		    for (( j=0 ; j<$(($i+1)) ; j++ )); 
		    do
			echo -n "* "
		    done
		    echo 
		done
	fi
done


	        
