import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Box, Heading } from '@chakra-ui/react';
import './D3BarGraph.css'

function D3BarGraph({data, title}){
    const svgRef = useRef(null);

    useEffect(() => {
        if (!data || !svgRef.current) {
            return;
        }

        // --- D3 LOGIC MODIFIED FOR CLUSTER DISTANCES ---
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const width = +svg.attr("width");
        const height = +svg.getComputedStyle("height").slice(0, -2); // get height in pixels
        const marginTop = 30;
        const marginRight = 0;
        const marginBottom = 30;
        const marginLeft = 40;

        // Create a copy and sort the data by distance, ascending
        const sortedData = [...data].sort((a, b) => a.distance - b.distance);

        // Find the minimum distance to highlight the corresponding bar
        const minDistance = d3.min(sortedData, d => d.distance);

        // X scale (using cluster_description)
        const x = d3.scaleBand()
            .domain(sortedData.map(d => d.cluster_description)) // CHANGED: Use sorted descriptions
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        // Y scale (using distance)
        const y = d3.scaleLinear()
            .domain([0, d3.max(sortedData, (d) => d.distance)]) // CHANGED: Use distance
            .range([height - marginBottom, marginTop]);

        // Add bars
        svg.append("g")
            .selectAll("rect")
            .data(sortedData)
            .join("rect")
            // CHANGED: Use a conditional fill color
            .attr("fill", d => (d.distance === minDistance ? "#DD6B20" : "steelblue"))
            .attr("x", (d) => x(d.cluster_description)) // CHANGED: Use cluster_description
            .attr("y", (d) => y(d.distance))           // CHANGED: Use distance
            .attr("height", (d) => y(0) - y(d.distance)) // CHANGED: Use distance
            .attr("width", x.bandwidth());

        // Add X-axis
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

        // Add Y-axis
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y)) // CHANGED: Removed percentage formatting
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("↑ Distância ao Centroide")); // CHANGED: Updated label text

    }, [data]);

    return (
        <Box className='bar-graph-card' borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
            <Heading size="sm" mb={2}>{title}</Heading>
            <svg
                ref={svgRef}
                width="100%"
                height="300px" // Use a fixed pixel height for consistency
                style={{ maxWidth: "100%" }}
            ></svg>
        </Box>
    );
}

export default D3BarGraph