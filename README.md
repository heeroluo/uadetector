UA Detector
=========================================

UA Detector is a library that focus on **useragent analysing**.

UA Detector runs on Node.js. You should install Node.js(at least 0.10.0) first, then do this in command line:

	npm install uadetector -g

# Simple usage

## View package version
	uadetect -v

## Device analysing
	uadetect "an useragent string" -device

## OS analysing
	uadetect "an useragent string" -os

## Browser core analysing
	uadetect "an useragent string" -browsercore

## Browser analysing
    uadetect "an useragent string" -browser

#Advanced usage

## Specify output format
	uadetect "an useragent string" -device -format "%name|%version"

## Analyse all
	uadetect "an useragent string" -device -os -browsercore -browser