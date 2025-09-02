import React, { useRef, useEffect } from 'react';

import * as d3 from 'd3';

import { Box, Heading } from '@chakra-ui/react';

import './D3BarGraph.css'



function D3BarGraph({ data }) {

    const svgRef = useRef(null);

    const chartData = data

    useEffect(() => {
        // Make sure you are passing the array, not the whole object

        if (!chartData || !svgRef.current) {
            return; // Wait until data is available and the ref is set.
        }

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const width = +svg.attr("width");
        const height = +svg.attr("height");
        const marginTop = 30;
        const marginRight = 0;
        const marginBottom = 30;
        const marginLeft = 40;

        // Create a copy and sort the data by distance in descending order
        const sortedData = [...chartData].sort((a, b) => b.distance - a.distance);

        // **FIXED X-SCALE**
        // The domain is now a simple array of names from the sorted data.
        const x = d3.scaleBand()
            .domain(sortedData.map(d => d.cluster_description)) // Use sorted data to set domain order
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        // **Y-SCALE (Correct as is)**
        // The domain correctly goes from 0 to the max distance value.
        const y = d3.scaleLinear()
            .domain([0, d3.max(sortedData, (d) => d.distance)])
            .range([height - marginBottom, marginTop]);

        // Add a rect for each bar.
        svg.append("g")
            .attr("fill", "steelblue")
            .selectAll("rect")
            .data(sortedData) // Use the sorted data for drawing
            .join("rect")
            .attr("x", (d) => x(d.cluster_description))
            .attr("y", (d) => y(d.distance))
            .attr("height", (d) => y(0) - y(d.distance))
            .attr("width", x.bandwidth());

        // Add the x-axis.
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

        // Add the y-axis and label.
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y)) // Removed the tickFormat for clarity, see note below
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
            );
    }, [data]); // Dependency array is correct



    return (

        <Box className='bar-graph-card'>

            <Heading>Distância ao centroide do cluster por cluster encontrado</Heading>

            <svg

                ref={svgRef}

                width={928}

                height={800}

                style={{ maxWidth: "100%", height: "auto" }}

            ></svg>

        </Box>

    )

}
export default D3BarGraph