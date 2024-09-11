import techsRadar from "@app/assets/sections/techs-radar.jsonc";

/** 
 * @return {import("react-apexcharts").Props} 
 */
export default function useRadarGraphOptions() {
    return {
        series: techsRadar.series,
        options: {
            chart: {
                width: '900px',
                height: '900px',
                type: 'radar',
                foreColor: 'white',
                toolbar: { show: false, }
            },
            stroke: { width: 2 },
            fill: { opacity: 0.8, type: 'solid' },
            markers: { size: 0 },
            yaxis: { show: false, stepSize: 20, },
            xaxis: {
                categories: techsRadar.categories,
                labels: {
                    show: true,
                    style: {
                        colors: [
                            "white", "white", "white", "white", "white",
                            "white", "white", "white", "white", "white",
                            "white"
                        ],
                        fontSize: "1rem",
                        fontWeight: '500',
                    },
                },
            },
            responsive: [
                {
                    breakpoint: 1253,
                    options: { chart: { width: "700px", height: "700px" } }
                },
                {
                    breakpoint: 953,
                    options: { chart: { width: "500px", height: "500px" } }
                },
                {
                    breakpoint: 653,
                    options: { chart: { width: "300px", height: "300px" } }
                }
            ]
        }
    }
}