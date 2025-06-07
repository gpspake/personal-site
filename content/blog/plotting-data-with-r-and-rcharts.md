---
title: Plotting Data with R and rCharts
date: '2015-09-10T01:30:47'
draft: false
categories:
- Code
tags:
- R
author: George Spake
slug: plotting-data-with-r-and-rcharts
---

This semester, I'm taking a course that encourages using R for statistical
analysis. I decided to see what I could do with it.

To get started, I installed R using [homebrew](http://brew.sh/) started
looking in to what sort of packages I could find and stumbled across
[rCharts](http://rcharts.io/).

[rCharts](http://rcharts.io/) "is an R package to create, customize and
publish interactive javascript visualizations from R using a familiar lattice
style plotting interface.”

"You can install rCharts from github using the [dev tools
package](https://cran.r-project.org/web/packages/devtools/index.html)"

    
    
    install.packages("devtools”) 
    require(devtools) 
    install_github('rCharts', 'ramnathv’)

Once you have rCharts installed, you can create plot your data in nice looking
javascript charts.

I saved all of the data from an in-class exercise to a csv. Here are the
contents of that file:

    
    
    trial,inspector 1 results, inspector 2 results, avg results
    "1",129,130,129.5
    "2",131,132,131.5
    "3",140,141,140.5
    "4",145,145,145
    "5",144,146,145
    "6",147,146,146.5
    "7",130,134,132
    "8",146,144,145
    "9",136,139,137.5
    "10",133,135,134
    "11",139,137,138
    "12",144,142,143
    "13",127,133,130
    "14",123,125,124
    "15",129,125,127
    "16",126,130,128
    "17",125,125,125
    "18",123,126,124.5
    "19",128,125,126.5
    "20",125,125,125
    "21",128,125,126.5
    "22",127,127,127
    "23",126,131,128.5
    "24",132,134,133
    "25",125,124,124.5
    "26",126,127,126.5
    "27",100,106,103
    "28",133,132,132.5
    "29",130,128,129
    "30",125,125,125

The following script reads the data from the csv file and plots it on a chart
(I saved this as `launchdata.r`)

    
    
    #!/usr/bin/env Rscript
    
    #load rCharts
    library(rCharts)
    
    #assign contents of csv to variable: results
    results &amp;amp;amp;amp;lt;- read.csv("results.csv")
    
    #plot data on graph
    print(
      mPlot(
        x='trial',
          parseTime = FALSE,
          y=list(
              'avg.results',
              'inspector.2.results',
              'inspector.1.results'
          ),
          data = launchdata,
          type='Line',
          labels=list('Average', 'Inspector 2', 'Inspector 3'),
          xLabels='trial'
      )
    )
    
    #print summary to console just for fun
    print( summary(launchdata) )

Now I can run the script: `source("launchdata.r”)` from the R console which
will open a nice interactive javascript line chart (below) in my browser and
print a summary of all the data to the console.

 | Trial| Inspector 1 Results| Inspector 2 Results| Average Results  
---|---|---|---|---  
Min.| 1.00| 100.0| 106.0| 103.0  
1st Qu.| 8.25| 126.0| 125.0| 126.5  
Median| 15.50| 129.0| 130.5| 129.2  
Mean| 15.50| 130.7| 131.5| 131.1  
3rd Qu.| 22.75| 135.2| 136.5| 136.6  
Max.| 30.00| 147.0| 146.0| 146.5  
  
That's about it.

This was mostly just an exercise in getting to know R; the data here isn't
very useful or interesting but the chart turned out pretty nice.

Note: The mPlot rCharts function used in this example uses the
[morris.js](http://morrisjs.github.io/morris.js/) library to plot charts.
According to a friend, morris isn't being as actively maintained as some
alternatives so it might be better to use one of those if possible.
Fortunately, rCharts supports a number of js chart libraries out of the box.
