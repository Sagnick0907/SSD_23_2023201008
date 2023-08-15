#!/bin/bash

read -p 'Jaggu X = ' JAGGUX
read -p 'Jaggu Y = ' JAGGUY
read -p 'Police X =' PoliceX
read -p 'Police Y =' PoliceY
read -p 'H = ' hours

x=1
while [ $x -le $hours ]
do
  read -p 'Police X =' PoliceX
  read -p 'Police Y =' PoliceY
  xdiff=`echo "scale=2; $JAGGUX - $PoliceX" | bc`
  ydiff=`echo "scale=2; $JAGGUY - $PoliceY" | bc`
  sq1=`echo "scale=2; $xdiff * $xdiff" | bc`
  sq2=`echo "scale=2; $ydiff * $ydiff" | bc`
  number=`echo "scale=2; $sq1 + $sq2" | bc`
  dist=`echo "scale=2; sqrt($number)" | bc`
  echo "$dist "
  x=$(( $x + 1 ))
done

