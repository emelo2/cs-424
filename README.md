	Cs 424 Project 2:
Socioeconomic Status in relation to Electricity Usage in Chicago


Authors:
Stephanie Melo
Lubna Mirza
Anthony Zuluaga


Our project is centered around socioeconomic data in relation to electricity usage in Chicago. Our group wanted to explore to see if there is any correlation between energy waste and socioeconomic status, at least within the boundaries of our hometown. While brainstorming, our group came up with a number of hypothesis centered around the correlations. Some of the ideas that we had were a positive correlation between higher socioeconomic status and higher levels of energy usage/waste. However, we discussed a multitude of other possibilities, including the prospect of government aid skewing those numbers, allowing for a larger level of energy waste towards the lower levels of socioeconomic class. In addition, it was theorized that individuals who are part of a higher socioeconomic ranking may spend less time in their own homes. These questions motivated us to actually produce versus consuming existing information that we already know and can easily visualize. Anyone who is interested in discovering information regarding energy conservation in our city, or has an interest in the differences in lifestyle that socioeconomic status can cause would definitely find our data to be thought provoking and worth giving attention to. 


To delve deeper into the problem, we retrieved three datasets from the City of Chicago Data Portal. We retrieved electricity data and socioeconomic data by neighborhood, and we also retrieved a dataset ranking each neighborhood by a term called “hardship index,” which compiles data by a multitude of factors involving crowded housing, individuals living below the poverty level, unemployment rates, education levels, and per capita income. This was an interesting find for us because it made it much easier to categorize each neighborhood. To ensure that we would have reasonably reliable data that isn’t skewed by apartment complexes, commercialized or industrial buildings, and the like, we chose to only utilize electricity and socioeconomic data from single family households. 


We have three visualizations which are a choropleth, a bar graph, and a streamgraph. Stephanie completed the choropleth and bar graph, Lubna was responsible for the streamgraph, and Anthony was responsible for a radial graph. We have a simple bar graph that depicts the socioeconomic status of each neighborhood. Though this seems daunting, it is made much more user friendly through interaction with the choropleth, which is described below.


After discussing our ideas with Dr. Tony Fast, he gave us the suggestion of utilizing a choropleth for our data. This inspired us to look into this visualization technique and the possibilities available through its utilization. The choropleth visualization incorporates the electricity consumption data, the hardship index data, and the per capita income of each neighborhood. Each neighborhood is a specific value of blue in relation to the amount of energy consumption. The darker the blue, the more electricity has been used. Upon mousing over each neighborhood, a tooltip is revealed that displays the name of the neighborhood, its hardship rank, and its per capita income. Additionally, clicking any of the neighborhoods will highlight that neighborhood in the bar graph with a bright red, clearly visualizing that neighborhood’s socioeconomic status in comparison to all the others.  
![alt tag](cs-424/images/1.jpg)
The bright red highlight appears when a neighborhood is clicked on.


The bargraph is scaled in a way that it is very clear to see the differences of income between neighborhood. The user can choose any bar and a tooltip is revealed displaying the name of the neighborhood. An interesting outlier is the Loop, which seems to have used little to no electricity. However, we can easily deduce that, since our data only focuses on single family households, there exists a skew in the amount of electricity used for the loop because the loop contains very few single family homes. 



The loop only has a recorded 15,288 kWh recorded, but that is because of the lack of single family homes in that area.


Additionally, we have a streamgraph visualization that is utilized to show electricity usage across a full year with monthly intervals of data. Because the hardship index is out of 100 and showing that many categories in the streamgraph proved to be confusing and visualized too much at the same time, the neighborhoods are grouped by intervals of 10 by hardship index. Therefore, all neighborhoods with a hardship index of under 10 are in a layer together, and so on. The streamgraph continues along a timeline across a year of data recording. Though the data is monthly, the streamgraph successfully interpolates the data, creating a visually appealing and easy-to-understand visualization. The layers are ordered sequentially such that the highest hardship indices appear towards the top of the graph. To make the differences in levels more obvious and visually appealing, there is padding in between each layer. This creates a unique ribboned look throughout the streamgraph. Throughout the year, there is a visible flux of energy usage. A notable observation that can be made by observing the streamgraph is the spike in energy usage across all neighborhoods during the month of July and again around December. This can easily be inferred to be representing the vast increase of households using air conditioning during the hottest month of the year, and an increase in the amount of electricity for holiday decorations in December. Another interesting observation is that the neighborhoods with the easiest hardship index (1-9) and the most difficult hardship index (90-100) both use roughly the same amount of electricity. Though we aren’t sure, we have inferred that perhaps electricity usage is very low in neighborhoods with high hardship indices because of the amount of time that they spend working, or perhaps it represents the difficulty for those individuals to make ends meet and pay bills, thus representing motivation to conserve electricity. Though we aren’t sure exactly why, perhaps the individuals with the easiest hardship indices spend little time at home because of how much they work. 

The streamgraph’s bulges represent the increase of electricity usage across all households in the month of July and Decemer.


Padding allows for an ordered, sequential color range that is still easy to understand.
Because we had a lot of data and we wanted to make it as concise as possible, it was useful for us to utilize spatial (choropleth) and timeline (streamgraph) data. Without mapping data, it would be difficult to visualize the patterns within neighborhoods. For example, the image in our group’s heads of the neighborhoods with the most electricity used were areas like the northeast side. However, by looking at the data, it’s easy to see that much of the most used electricity happens on the northwest and southwest sides. Additionally, without a streamgraph, we wouldn’t have been able to effectively visualize the sudden influx in electricity in July in such a concise way.
