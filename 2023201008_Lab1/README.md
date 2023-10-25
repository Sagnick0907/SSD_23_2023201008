Q1:
Take input file from cmd line argument.
sort the file and feed it to next cmd 'wc -l' using pipeline
calculate t=(len/2)+1
Then using pipeline enter cmd head for first t lines and use tail cmd to print the last line(which is the middle line).

Q2:
Take input file from cmd line argument.
use ls to get the list of driectories and pass this as input through pipeline to the next grep cmd where I will select files starting with f or F with -i option(to ignore cases) and then pass the resultant to next grep cmd where we will remove those files having cpp in them.

Q3:
Take input file from cmd line argument.
Use echo to print 1 line.
Use whereis with options to ignore cases -iname and print the matching line.