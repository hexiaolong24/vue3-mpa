#!/usr/bin/env bash
echo "show big size Image start..."

find ./src -size +100kb \( -name "*.png" -o -name "*.jpg" -o -name "*.gif" \) | xargs ls -lhS | awk '{print "\033[37;41;5m "$5 "\033[37;41;5m"," - ","\033[37;41;5m"$9"\033[0m"}'
# ls -lhS $1 | awk '{print "\033[37;41;5m "$5 "\033[37;41;5m"," - ","\033[37;41;5m"$9"\033[0m"}'

echo "show big size Image end...."