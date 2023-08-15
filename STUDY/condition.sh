#!/bin/bash

if [ ${1,,} = sagnick ]; then
	echo "Oh! Hi Sagnick Bhar."
elif [ ${1,,} = help ] ; then
	echo "Tell me your name first!?"
else
	echo "I don't know who you are?"
fi

case ${1,,} in 
	option1.1 | option1.2)
		echo "either of the options are true"
		;;
	option2)
		echo "Option2"
		;;
	*)
		echo "none of the above"
esac
		