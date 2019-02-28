#!/usr/bin/env python

from __future__ import print_function
from sys import stdout

while True:
  stdout.flush()
  user_input = raw_input().strip()
  if user_input.lower() == 'exit':
    break
  print(user_input.upper())

print('bye!')
