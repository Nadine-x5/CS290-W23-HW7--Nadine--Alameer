name: K6 Performance Test

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  k6-performance-test:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      
      - name: Install K6
        run: |
          sudo apt update
          sudo apt install k6

      - name: Run K6 Performance Test
        run: |
          k6 run performance-test.js
          
      - name: Generate Report
        run: |
          k6 run --out json=out.json performance-test.js
          k6 report out.json
